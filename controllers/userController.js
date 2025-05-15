const users = require('../model/user');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

exports.getAllUsers = (req, res) => {
    const usersWithoutPassword = users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
     console.log('geting all data attempt:', req.body); 
    res.json(usersWithoutPassword);
};

exports.getUserById = (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
};


exports.getDonors = (req, res) => {
    const donors = users
        .filter(u => u.type && u.type.toLowerCase() === 'donor')
        .map(u => {
            const { password, ...userWithoutPassword } = u;
            return userWithoutPassword;
        });
    console.log('Getting donors:', donors.length);
    res.json(donors);
};


exports.getRecipients = (req, res) => {
    const recipients = users
        .filter(u => u.type && u.type.toLowerCase() === 'recipient')
        .map(u => {
            const { password, ...userWithoutPassword } = u;
            return userWithoutPassword;
        });
    console.log('Getting recipients:', recipients.length);
    res.json(recipients);
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    try {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const { password: pw, ...userWithoutPassword } = user;
        console.log('Login attempt:', req.body); 
        res.json({ message: 'Login successful',isSuccessful:true, user: userWithoutPassword });

    } catch (error) {
        res.status(500).json({ message: 'Login error' });
    }
};

exports.createUser = async (req, res) => {
    const { name, bloodgroup, email, idnumber, phonenumber, profilepictureurl, search, type, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    const id = (users.length > 0) ? (parseInt(users[users.length - 1].id) + 1).toString() : "1";


    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(409).json({ message: 'User with this email already exists' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = {
            id,
            name,
            bloodgroup: bloodgroup || '',
            email,
            idnumber: idnumber || '',
            phonenumber: phonenumber || '',
            profilepictureurl: profilepictureurl || '',
            search: search || '',
            type: type || '',
            password: hashedPassword
        };

        users.push(newUser);

        const { password: pw, ...userWithoutPassword } = newUser;
        res.status(201).json(userWithoutPassword);
                console.log('Register Attemp:', req.body); 
    } catch (error) {
        res.status(500).json({ message: 'Error hashing password' });
    }
};

exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { name, bloodgroup, email, idnumber, phonenumber, profilepictureurl, search, type, password } = req.body;

    if (name) user.name = name;
    if (bloodgroup) user.bloodgroup = bloodgroup;
    if (email) user.email = email;
    if (idnumber) user.idnumber = idnumber;
    if (phonenumber) user.phonenumber = phonenumber;
    if (profilepictureurl) user.profilepictureurl = profilepictureurl;
    if (search) user.search = search;
    if (type) user.type = type;

    if (password) {
        try {
            user.password = await bcrypt.hash(password, SALT_ROUNDS);
        } catch (error) {
            return res.status(500).json({ message: 'Error hashing password' });
        }
    }

    const { password: pw, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
};

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).json({ message: 'User not found' });

    const deletedUser = users.splice(index, 1)[0];
    const { password, ...userWithoutPassword } = deletedUser;
    res.json(userWithoutPassword);
};
