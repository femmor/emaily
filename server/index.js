const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

// mongodb URI
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialize express app
const app = express();

app.use(express.json())
app.use(express.urlencoded())

// Use Cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// Initialize and use session
app.use(passport.initialize());
app.use(passport.session());

// Get the authRoutes
require("./routes/authRoutes")(app);

// Get the billingRoutes
require("./routes/billingRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
