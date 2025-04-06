const mongoose = require('mongoose');

const username = 'subhadeeppathak2013'; // Replace with your database username
const password = '3jiYvquNTmi64teg';

const connectionURL = `mongodb+srv://${username}:${password}@wbcluster1.yaqixz8.mongodb.net/?retryWrites=true&w=majority&appName=WBCluster1`;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const connectToDatabase = async () => {
    try {
        await mongoose.connect(connectionURL, connectionParams);
        console.log('Connected to the database');
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    }
};

module.exports = connectToDatabase;