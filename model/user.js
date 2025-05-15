
const users = [
  {
    id: "1",
    name: "Roberto Calimbo",
    bloodgroup: "A+",
    email: "robertsambayon123@gmail.com",
    idnumber: "123456789",
    phonenumber: "09123456789",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "robertocalimbo",
    type: "donor",
    password: "$2b$10$BVOOghSwBBx2NWkKKrTWSuVtRa7n4t8NRj4bXIOg3BWPj0c7jDhcO"
     // hashed "123"
  },
  {
    id: "2",
    name: "Jane Doe",
    bloodgroup: "B-",
    email: "jane.doe@example.com",
    idnumber: "987654321",
    phonenumber: "09987654321",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "janedoe",
    type: "recipient",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "3",
    name: "Michael Smith",
    bloodgroup: "O+",
    email: "michael.smith@example.com",
    idnumber: "111222333",
    phonenumber: "09112223344",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "michaelsmith",
    type: "donor",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "4",
    name: "Emily Johnson",
    bloodgroup: "AB-",
    email: "emily.johnson@example.com",
    idnumber: "222333444",
    phonenumber: "09223334455",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "emilyjohnson",
    type: "recipient",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "5",
    name: "Chris Lee",
    bloodgroup: "A-",
    email: "chris.lee@example.com",
    idnumber: "333444555",
    phonenumber: "09334445566",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "chrislee",
    type: "donor",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "6",
    name: "Sophia Martinez",
    bloodgroup: "O-",
    email: "sophia.martinez@example.com",
    idnumber: "444555666",
    phonenumber: "09445566777",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "sophiamartinez",
    type: "recipient",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "7",
    name: "David Brown",
    bloodgroup: "B+",
    email: "david.brown@example.com",
    idnumber: "555666777",
    phonenumber: "09556677888",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "davidbrown",
    type: "donor",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "8",
    name: "Olivia Garcia",
    bloodgroup: "AB+",
    email: "test",
    idnumber: "666777888",
    phonenumber: "09667788999",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "oliviagarcia",
    type: "recipient",
    password: "$2b$10$BVOOghSwBBx2NWkKKrTWSuVtRa7n4t8NRj4bXIOg3BWPj0c7jDhcO"
  },
  {
    id: "9",
    name: "James Wilson",
    bloodgroup: "A+",
    email: "james.wilson@example.com",
    idnumber: "777888999",
    phonenumber: "09778899000",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "jameswilson",
    type: "donor",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "10",
    name: "Isabella Anderson",
    bloodgroup: "B-",
    email: "isabella.anderson@example.com",
    idnumber: "888999000",
    phonenumber: "09889900111",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "isabellaanderson",
    type: "recipient",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "11",
    name: "Ethan Thomas",
    bloodgroup: "O+",
    email: "ethan.thomas@example.com",
    idnumber: "999000111",
    phonenumber: "09990011222",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "ethanthomas",
    type: "donor",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "12",
    name: "Mia Jackson",
    bloodgroup: "AB-",
    email: "mia.jackson@example.com",
    idnumber: "000111222",
    phonenumber: "09101122334",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "miajackson",
    type: "recipient",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "13",
    name: "Alexander White",
    bloodgroup: "A-",
    email: "alexander.white@example.com",
    idnumber: "111222333",
    phonenumber: "09223334455",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "alexanderwhite",
    type: "donor",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "14",
    name: "Charlotte Harris",
    bloodgroup: "O-",
    email: "charlotte.harris@example.com",
    idnumber: "222333444",
    phonenumber: "09334445566",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "charlotteharris",
    type: "recipient",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  },
  {
    id: "15",
    name: "Daniel Martin",
    bloodgroup: "B+",
    email: "daniel.martin@example.com",
    idnumber: "333444555",
    phonenumber: "09445566777",
    profilepictureurl: "https://www.pngkey.com/png/detail/988-9886269_blank-person-facebook-no-profile.png",
    search: "danielmartin",
    type: "donor",
    password: "$2b$10$N9qo8uLOickgx2ZMRZo5i.ei5u8vlXLUnyoMOPDZ2D0ro98D1cXqG"
  }
];

module.exports = users;

