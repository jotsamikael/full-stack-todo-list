const express = require("express");
const ENV = require("./config");
const { db } = require("./model/index");
const cookieParser = require('cookie-parser');
const TaskRouter = require('./router/Task.router')
const setupSwagger = require('./config/swagger');

const app = express();
app.use(express.json())
app.use(cookieParser());

//import routes

//port
const PORT = ENV.PORT || 8889;


//Prefix
app.use('/api/task',TaskRouter)

// Load swagger
setupSwagger(app);

//Error handeling middleware
app.use((err,req,res,next)=>{
  const status = err.status || 500;
  const message = err.message || "An error occured";
  const details = err.details || null;

  res.status(status).json({
    status,
    message,
    details
  })


})

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
