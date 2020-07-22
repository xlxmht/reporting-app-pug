"use strict";

const express = require("express");
const path = require("path");
const app = express();
require('dotenv').config();

const CourseCtrl = require("./api/course/course.controller");
const StudentCtrl = require("./api/student/student.controller");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views"));
app.use(express.static(__dirname + '/assets'));

app.get("/", (req, res) => {
  res.send("Voila, Welcome to the world of APIs");
});

app.use("/api/coursemaster", require("./api/course"));
app.use("/api/studentmaster", require("./api/student"));

app.get("/coursemaster", CourseCtrl.list, (req, res) => {
  res.render("coursemaster", { courses: req.data });
});

app.get("/studentlist", StudentCtrl.list, (req, res) => {
  res.render("studentlist", { students: req.studentsList });
});

app.get("/newregister", CourseCtrl.list, (req, res) => {
  res.render("register", { courses: req.data });
});

app.get("/editstudent/:id", StudentCtrl.list, CourseCtrl.list, (req, res) => {
  res.render("register", { isEdit: true, studentObj: req.studentsList[0], courses: req.data });
});

app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }
  return res.json({
    message: error.message,
    stack: error.stack
  });
});

const PORT = process.env.PORT || 2020;

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});