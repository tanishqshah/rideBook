const mongoose = require('mongoose');

async function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT,{})
        .then(() => {
            console.log("CONNECTED TO DATABASE SUCCESSFULLY");
        })
        .catch((error) => {
            console.error('COULD NOT CONNECT TO DATABASE:', error.message);
        })
}
module.exports = connectToDb;