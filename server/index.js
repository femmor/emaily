const express = require("express");
require("./services/passport");

const app = express();
// Get the authRoutes
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
