"use strict";
const StudentModel = require("./student.model");

exports.list = async (req, res, next) => {
  const filter = {
    status: true
  };
  if(req.params.id) {
    filter._id = req.params.id;
  }
  try {
    const docs = await StudentModel.find(filter);
    req.studentsList = docs;
    next(null);
  } catch (err) {
    next(err);
  }
}

exports.create = async (req, res, next) => {
  const reqBody = req.body;
  try {
    await StudentModel.insert({
      ...reqBody,
      status: true,
      createdAt: Date.now()
    });
    return res.redirect("/studentlist");
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    req.body.status = !req.body.status;
    await StudentModel.update({ _id: req.params.id }, { $set: req.body });
    return res.redirect("/studentlist");
  } catch (err) {
    next(err);
  }
};