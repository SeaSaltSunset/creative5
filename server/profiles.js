const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");

// Configure multer so that it will upload to '/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../public/images/',
  limits: {
    fileSize: 10000000
  }
});

const users = require("./users.js");
const User = users.model;


const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  playerName: String,
  charName: String,
  charClass: String,
  age: String,

  heart: String,
  might: String,
  mind: String,
  strength: String,
  faith: String,
  male: Boolean,
  gender: String,
  //  path: String,
});

const Profile = mongoose.model('Profile', profileSchema);


router.post("/", auth.verifyToken, User.verify, async (req, res) => {   //will not accept photos
  const profile = new Profile({
    //  title: req.body.title,
    user: req.user,
    playerName: req.body.playerName,
    charName: req.body.charName,
    charClass: req.body.charClass,
    age: req.body.age,
    heart: req.body.heart,
    might: req.body.might,
    mind: req.body.mind,
    strength: req.body.strength,
    faith: req.body.faith,
    male: req.body.male,
    //   path: req.body.path,
    gender: req.body.gender,
  });
  try {
    await profile.save();
    res.send(profile);
  } catch (error) {     //May need to edit with
    console.log(error);
    res.sendStatus(500);
  }
});

// get all Profiles for one user
router.get("/", auth.verifyToken, User.verify, async (req, res) => {
  // return profiles
  try {

    console.log("getting der profiles for ", req.user);
    let profiles = await Profile.find({

      user: req.user
    }).sort({
      created: -1
    });
    console.log("# of profiles: ", profiles);
    return res.send(profiles);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get all profiles for all users
router.get("/all", async (req, res) => {
  try {
    let photos = await Profile.find().sort({
      created: -1
    }).populate('user');
    return res.send(photos);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});


module.exports = {
  model: Profile,
  routes: router,
}
