
const Joi = require('joi');
const express = require('express');
const { connect } = require('mongoose');
const app = express();

app.use(express.json());

let courses = [
    {id: 1, name: "AMD"},
    {id: 2, name: "Intel"},
    {id: 3, name: "NVIDIA"},
    {id: 4, name: "Quancomm"}
];

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    }

    const result = Joi.validate(req.body, schema);
    //console.log(result);
    if(result.error) return res.status(400).send(result.error.details[0].message); 

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course);
    res.send(courses);
});

app.put('/api/courses/:id', (req, res) => {
    //invalidate id
    const course = courses.find(course => {
        return course.id === parseInt(req.params.id);
    });
    if(!course) return res.status(404).send("Unknown");
    //invalidate json
    const result = validateCourse(req.body);
    if(result.error) return res.status(400).send(result.error.details[0].message);
    //update id name
    course.name = req.body.name;
    res.send(courses);
});

app.delete('/api/courses/:id', (req, res) => {
    //check id
    const course = courses.find(course => {
        return course.id = parseInt(req.params.id);
    });
    if(!course) return res.status(404).send("Unknown");

    //check json name
    // const result = validateCourse(req.body);
    // if(result.error) return res.status(400).send(result.error.details[0].message);

    //
    const indexOfId = courses.indexOf(course);
    courses.splice(indexOfId, 1);
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    //res.send(req.params);
    //res.send(req.query);
    const course = courses.find(course => {
        return course.id === parseInt(req.params.id);
    });
    if(!course) return res.status(404).send("Unknown");
    res.send(course);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Successfully connect to port ${port}`);
});


function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(course, schema);
}