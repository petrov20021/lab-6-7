var express = require('express');
var StudentService = require('../logic/studentService.js');
var router = express.Router();

const studentService = new StudentService();

router.get('/getAll', function (req, res, next) {
  const students = studentService.getAll();

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(students));
});

router.post('/upsert', function (req, res, next) {
  console.log(req.body)
  studentService.upsert(req.body);
  res.end();
});


router.delete('/delete', function (req, res, next) {
  studentService.delete(req.query.id);
  res.end();
});

module.exports = router;
