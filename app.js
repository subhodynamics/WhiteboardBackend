const express = require('express');
const apiRoutes = require('./routes');
const cors = require('cors');
const connectToDatabase = require('./routes/db');


const app = express();
const PORT = 3000;
connectToDatabase();

app.use(cors());
app.use('/', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});