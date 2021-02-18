const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

// Home Route Handler
app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
    // function (accessToken, refreshToken, profile, cb) {
    //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //     return cb(err, user);
    //   });
    // }
  )
);

// Google Auth Route Handler
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
