const express = require('express');
const userRoutes = require('./routes/user-route');
const compatibleRoute = require('./routes/compatible-route'); 
const users = require('./testData');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRoutes);
app.use('/api', compatibleRoute);

app.get('/', (req, res) => {
  res.send('This is a CRUD API response');
});

app.listen(3200, () => {
  console.log(`Server running on port 3200`);
});
