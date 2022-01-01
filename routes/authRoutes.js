const passport = require("passport");
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] }) //scope means asking google to provide me profile and email of user
  );
  app.get("/", (req, res) => {
    res.json({ message: "karthicks a bitchAss" });
  });
};
