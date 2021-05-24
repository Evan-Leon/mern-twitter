
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require('./models/User');
const bodyParser = require('body-parser');

app.use("/api/users", users);
app.use("/api/tweets", tweets);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(passport.initialize());
// require('./config/passport')(passport);

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// app.get("/", (req, res) => {
//     const user = new User({
//         handle: 'bob',
//         email: 'bob@bobson.com',
//         password: '123456'
//     })
//     user.save()
//     res.send("bloop");
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));


