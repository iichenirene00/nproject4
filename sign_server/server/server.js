const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
mongoose.connect(
  "mongodb+srv://irenechen2010:fane9821@cluster0.qlt9kk4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
mongoose.connection.on("open", () => {
  console.log("database connect success");
});
const createSchema = new mongoose.Schema({
  email: String,
  user: String,
  password: String,
});

const createModel = mongoose.model("create", createSchema);
const app = express();

const secret = "dssffdfcdd";

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

const encryption = (req, res, next) => {
  let password = req.body.password;
  console.log(password);
  req.body.password = md5(password);
  next();
};

app.post("/api/v1/create", encryption, (req, res) => {
  console.log(req.body);
  createModel
    .create(req.body)
    .then((data) => {
      console.log("create success");
      res.send({
        code: 1,
        message: "create success",
        data: data,
      });
    })
    .catch((err) => {
      console.log("create fail");
      res.send({
        code: 0,
        message: "create fail",
        data: err,
      });
    });
});

app.post("/api/v1/sign", encryption, (req, res) => {
  console.log(req.body);
  createModel
    .findOne(req.body)
    .then((data) => {
      console.log(123, "sign success");
      console.log("data", data);
      if (data) {
        res.send({
          code: 1,
          message: "sign success",

          token: jwt.sign(
            { uid: data._id, exp: Math.ceil(Date.now() / 1000) + 7200 },
            secret
          ),
        });
      } else {
        res.send({
          code: 0,
          message: "sign fail",
        });
      }
    })
    .catch((err) => {
      console.log("sign fail");
      res.send({
        code: 0,
        message: "sign fail",
        data: err,
      });
    });
});
app.listen("8080", () => {
  console.log("server running on 8080");
});
