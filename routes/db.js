const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const cluster = process.env.MONGO_CLUSTER;
const clusterName = process.env.MONGO_CLUSTER_NAME;
const connectionURL = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority&appName=${clusterName}`;;


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