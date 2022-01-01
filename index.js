const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("./config/keys");
const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    () => {
      console.log(accessToken);
    }
  )
);
// when this route is met above will be called because above has an internal string 'google' which we specified below
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }) //scope means asking google to provide me profile and email of user
);
// port for heroku
// heroku knows to look at environment variables for port number
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`connected to port: ${PORT}`));
// Route Handlers
app.get("/", (req, res) => {
  res.json({ message: "karthicks a bitchAss" });
});

