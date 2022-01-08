const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const cookieParser = require('cookie-parser')
const path = require('path');

// Load .env vars
dotenv.config({ path: "./config/config.env" });

// const {dbConnect} = require("./config/databseConnection")

// dbConnect();

// App config
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
// app.use('/uploads', express.static('uploads'));

const userRoutes = require("./routes/user.routes");
// Routing URLS
app.use("/api/user", userRoutes);

app.use((req, res, next) => {
  const error = new Error('Exception Handled');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      error: {
          message: error.message
      }
  });
})

//App listener
const port = process.env.PORT || 7750;
app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`
  )
);
