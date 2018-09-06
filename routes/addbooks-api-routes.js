let db = require("../models");

module.exports = function(app) {

  app.get("/api/mybooks", function(req, res) {
    db.Mybooks.findAll({}).then(function(booksdb) {
      res.json(booksdb);
      console.log
    });

  });
  
  app.post("/api/mybooks", function(req,res) {
    db.Mybooks.create(req.body).then(function(booksdb) {
      res.json(booksdb);
    })
  });

  app.delete("/api/mybooks/:id", function(req,res) {
    db.Mybooks.destroy({where: { id: req.params.id} }).then(function(booksdb) {
      res.json(booksdb);
    });
  });
}