const express = require("express");
require("./services/passport");
const app = express();
const authRoutes = require("./routes/authRoutes");
// when this route is met above will be called because above has an internal string 'google' which we specified below

// port for heroku
// heroku knows to look at environment variables for port number

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`connected to port: ${PORT}`));
// Route Handlers
authRoutes(app);
