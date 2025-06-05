const express = require("express");
const ENV = require("./config");
const { db } = require("./model/index");
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json())
app.use(cookieParser());

//import routes

//port
const PORT = ENV.PORT || 8889;


//Prefix



//server
const startServer = async () => {
  try {
    //sync db
    await db.sync({ force: false })
    console.log(`✅ Database synced successfully`);
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error starting db:`, error.message);

  }
};

startServer();
