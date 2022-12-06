const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const productsRouter = require("./routes/product");
const servicesRouter = require("./routes/service");
const usersRouter = require("./routes/user");

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./config/keys").mongoURI;
mongoose.connect(db, { }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Routes
app.use("/api/products", productsRouter);
app.use("/api/services", servicesRouter);
app.use("/api/users", usersRouter);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

/*

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const historyRouter = require("./back-end/routes/history");
const projectRouter = require("./back-end/routes/project");
require('dotenv').config();

// our localhost port
const port = process.env.PORT || 3001;
const app = express()
app.use(cors());
app.use(express.json());
// our server instance
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// Add headers before the routes are defined

const db = require("./back-end/config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Routes
app.use("/api/history", historyRouter);
app.use("/api/project", projectRouter);

const server = http.createServer(app);

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('User connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))

*/