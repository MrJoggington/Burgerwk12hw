// Connect Node to MySQL.
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Smitty#1",
        database: "burgers_db",
        database_url: "postgres://slmiosrcfkriyu:728fdb54cf584f76059992963c534da297bd4e5f13553a64c0b67618fb9ecc81@ec2-54-225-173-42.compute-1.amazonaws.com:5432/d6ud5pm2a28ke4"
    });
};

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection.
module.exports = connection;