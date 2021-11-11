const express = require("express");
const router = express.Router();

// history Model
const history = require("../models/history");

// pet Model
const pet = require("../models/pet");

// user Model
const user = require("../models/user");

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Section to Users------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// GET Users
router.get("/user", async (req, res) => {
  const users = await user.find();
  res.json(users);
});

// GET User
router.get("/user/:id", async (req, res) => {
  const us = await user.findById(req.params.id);
  res.json(us);
});

//GET user by doc
router.get("/user/doc/:doc", async (req, res) => {
  const us = await user.findOne({ document: req.params.doc });
  res.json(us);
});
// ADD User
router.post("/user", async (req, res) => {
  const { name, lastName, typeDocument, document, status, gender } = req.body;
  const us = new user({
    name,
    lastName,
    typeDocument,
    document,
    status,
    gender,
  });
  await us.save();
  res.json({ status: "user Saved" });
});

// UPDATE  User
router.put("/user/:id", async (req, res) => {
  const { name, lastName, typeDocument, document, status, gender } = req.body;
  const newuser = { name, lastName, typeDocument, document, status, gender };
  await user.findByIdAndUpdate(req.params.id, newuser);
  res.json({ status: "user Updated" });
});

// DELETE  User
router.delete("/user/:id", async (req, res) => {
  await user.findByIdAndRemove(req.params.id);
  res.json({ status: "user Deleted" });
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Section to Pets-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// GET pets
router.get("/pet", async (req, res) => {
  const pets = await pet.find();
  res.json(pets);
});

// GET pet
router.get("/pet/:id", async (req, res) => {
  const pt = await pet.findById(req.params.id);
  res.json(pt);
});

// GET pet by user
router.get("/pet/user/:id", async (req, res) => {
  const pt = await pet.find({user:req.params.id});
  res.json(pt);
});

// ADD pet
router.post("/pet", async (req, res) => {
  const { user, name, race, gender } = req.body;
  const pt = new pet({ user, name, race, gender });
  await pt.save();
  res.json({ status: "pet Saved" });
});

// UPDATE  pet
router.put("/pet/:id", async (req, res) => {
  const { user, name, race, gender } = req.body;
  const newpet = { user, name, race, gender };
  await pet.findByIdAndUpdate(req.params.id, newpet);
  res.json({ status: "pet Updated" });
});

// DELETE  pet
router.delete("/pet/:id", async (req, res) => {
  await pet.findByIdAndRemove(req.params.id);
  res.json({ status: "pet Deleted" });
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Section to Historiess-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// GET all histories
router.get("/history", async (req, res) => {
  const histories = await history.find();
  res.json(histories);
});

// GET one history
router.get("/history/:id", async (req, res) => {
  const hstry = await history.findById(req.params.id);
  res.json(hstry);
});

// ADD a new history
router.post("/history", async (req, res) => {
  const {
    pet,
    temperature,
    weight,
    heartRate,
    breatheRate,
    time,
    feeding,
    habitat,
    notes,
  } = req.body;
  const hstry = new history({
    pet,
    temperature,
    weight,
    heartRate,
    breatheRate,
    time,
    feeding,
    habitat,
    notes,
  });
  await hstry.save();
  res.json({ status: "history Saved" });
});

// UPDATE a new history
router.put("/history/:id", async (req, res) => {
  const {
    pet,
    temperature,
    weight,
    heartRate,
    breatheRate,
    time,
    feeding,
    habitat,
    notes,
  } = req.body;
  const newhistory = {
    pet,
    temperature,
    weight,
    heartRate,
    breatheRate,
    time,
    feeding,
    habitat,
    notes,
  };
  await history.findByIdAndUpdate(req.params.id, newhistory);
  res.json({ status: "history Updated" });
});

router.delete("/history/:id", async (req, res) => {
  await history.findByIdAndRemove(req.params.id);
  res.json({ status: "history Deleted" });
});

module.exports = router;
