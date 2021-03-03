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
  app.get(
    "/auth/google/callback", 
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys")
    }
  );

  // Logout
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // User route
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
