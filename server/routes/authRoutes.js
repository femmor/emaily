const passport = require("passport");

module.exports = (app) => {
  // Google Auth Route Handler
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // Google Auth Callback Route Handler
  app.get("/auth/google/callback", passport.authenticate("google"));
};
