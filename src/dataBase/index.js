const { Pool, Client } = require("pg");

const database = {
  ssl: {
    rejectUnauthorized: false,
  },
  user: "jrddieroodwiyz",
  host: "ec2-3-233-100-43.compute-1.amazonaws.com",
  database: "d2p1asmc2ecm9u",
  password: "42a8751f51e283823bc99212c9616edb46b4bd996202f9b4eb83945a5f056da5",
  port: "5432",
};
const pool = new Pool(database);
pool
  .connect()
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Error al conectarse", error.stack));

module.exports = pool;
