var express = require('express');
var router = express.Router();

var CONTACTS_COLLECTION = "contacts";

router.get('/', function(req, res, next) {
  res.render('projects/mentorconnect', { title: 'Mentor Connection' });
});

// CONTACTS API ROUTES BELOW

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

router.get("/contacts", function(req, res) {
  res.app.locals.db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts."); //TODO: error handling
    } else {
      res.status(200).json(docs);
    }
  });

});

router.post("/contacts", function(req, res) {

  var newContact = req.body;

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400); //TODO: error handling
  }

  res.app.locals.db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new contact."); //TODO: error handling
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/contacts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

router.get("/contacts/:id", function(req, res) {
});

router.put("/contacts/:id", function(req, res) {
});

router.delete("/contacts/:id", function(req, res) {
});

module.exports = router;