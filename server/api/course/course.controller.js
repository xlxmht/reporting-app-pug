"use strict";
const CourseModel = require("./course.model");

exports.list = async (req, res, next) => {
  try {
    const docs = await CourseModel.find({ status: true });
    req.data = docs;
    next(null);
  } catch (err) {
    next(err);
  }
}

exports.create = async (req, res, next) => {
  const reqBody = req.body;
  try {
    await CourseModel.insert({
      ...reqBody,
      status: true,
      createdAt: Date.now()
    });
    return res.redirect("/coursemaster");
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  const id = req.params.id;
  try {
    await CourseModel.update({ _id: id }, { $set: req.body });
    return res.redirect("/coursemaster");
  } catch (err) {
    next(err);
  }
};