const mongoose = require("mongoose");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mock-resellify-api";

const users = [{
    firstName: "Lloyd",
    lastName: "Chambrier",
    username: "Lloyd Chambrier",
    dateOfBirth: "05-03-1990",
    gender: "male",
    interestedIn: "luxury clothes",
    email: "lloydchambrier@gmail.com",
    phoneNumber: "(+31)0685765664",
    currency: "euros",
    settingId:"679b94a01be141abdb5f10a9"
}]

const User = require("../models/User.model");
const Setting = require("../models/Setting.model");

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .then(()=>{
    User.create(users)
  })
  .then(()=> console.log("seed complete"))
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
