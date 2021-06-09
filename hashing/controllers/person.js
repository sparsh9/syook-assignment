const Person =  require('../models/Person');
const crypto = require('crypto');
const secret = "secret";
exports.createPerson = (req, res, next) => {
    const person = {
        name : req.body.name,
        origin : req.body.origin,
        destination : req.body.destination,

    };
    const secret_key = crypto
        .createHash('sha256', secret)
        .update(person.name, person.origin, person.destination)
        .digest('hex');

    const newPerson = new Person({
        name : req.body.name,
        origin : req.body.origin,
        destination : req.body.destination,
        secret_key : secret_key
    })

    console.log(newPerson)

    newPerson
        .save()
        .then(person => {
            res.send("Person saved successfully")
        })
        .catch(err => {
        res.status(400).send(err)
    })
}

exports.getPerson = (req, res, next) => {
    Person.find()
        .sort({'createdAt': -1})
        .then(persons => res.json(persons))
        .catch(err => {
            res.status(400).send(err);
        })

}

