// Import the necessary dependency
const { Client } = require("pg");

// Create a new PostgreSQL client with the given configuration
const crateClient = new Client({
    host: "task-database.aks1.westeurope.azure.cratedb.net",
    port: 5432,
    user: "admin",
    password: "o2Ca^KJakCU-er3086t3nciJ",
    ssl: true,
});

// Connect to the CrateDB database
crateClient.connect();

// getUsers function that retrieves users from database
const getUsers = () => {
    return crateClient
        .query("SELECT id, name FROM database.users ORDER BY id;")
        .then((res) => {
            return res.rows;
        })
        .catch((err) => {
            console.error(err);
            crateClient.end();
        });
};

// getUserName function that retrieves a users name from database
const getUserName = (userId) => {
    return crateClient
        .query(`SELECT name FROM database.users WHERE id = ${userId};`)
        .then((res) => {
            return res.rows;
        })
        .catch((err) => {
            console.error(err);
            crateClient.end();
        });
};

const getAllHabits = () => {
    return crateClient
        .query("SELECT id, name, description FROM database.habits ORDER BY id;")
        .then((res) => {
            return res.rows;
        })
        .catch((err) => {
            console.error(err);
            crateClient.end();
        });
};

// Export the functions, so they can be used by other modules
module.exports = {
    getUsers: getUsers,
    getUserName: getUserName,
    getAllHabits: getAllHabits,
};
