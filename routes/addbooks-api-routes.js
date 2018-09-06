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







  // app.get("/mybooks", function(req, res) {
  //   // findAll returns all entries for a table when used with no options
  //   db.Addbooks.findAll({}).then(function(dbAddbooks) {
  //     // We have access to the todos as an argument inside of the callback function
  //     res.json(dbAddbooks);
  //   });
  // });

  //   // POST route for saving new added book
  // app.post("/mybooks", function(req, res) {
  //   console.log(req.body);

  //   db.Addbooks.create({
  //     title: req.body.title,
  //     author: req.body.author
  //   }).then(function(dbAddbooks) {
  //       res.json(dbAddbooks);
  //     })
  //     // .catch(function(err) {
  //     //   console.error("Err =" + err);
  //     //   res.json({status: "Error", message: err});
  //     // });  
  //   });
  // };

    // =======================================================================
  //GET All added books
  // app.get("/api/addbooks", function(req, res) {
  //   // console.log('GET /api/addbooks');
  //   //If request is get specific myshelf query by id
  //   //include all myshelfs to query added books in specific user db by joining to dbaddbooks
  //   db.Addbooks.findAll({
  //     where: {myshelfId: req.params.myshelfId}
  //   }).then(function(dbMyshelf) {
  //     res.json(dbMyshelf);
  //   })
  //   .catch(function(err) {
  //     console.error("Err =" + err);
  //     res.json({status: "Error", message: err});
  //   });
  // });

  // // Get route for retrieving specific data of added book from myshelf
  // app.get("/api/addbooks/:id", function(req, res) {
  //   db.Addbooks.findOne({
  //     where: {
  //       id: req.params.id
  //     },
  //     include: [db.Myshelf]
  //   }).then(function(dbAddbooks) {
  //     console.log("dbAddbooks");

  //     if (dbAddbooks === null) {
  //     res.json({});
  //     } else {
  //       res.json(dbAddbooks);
  //     }
  //   })
  //   .catch(function(err) {
  //     console.error("Err =" + err);
  //     res.json({status: "Error", message: err});
  //   });
  // });


  // DELETE route for deleting added book
//   app.delete("/api/addbooks/:id", function(req, res) {
//     db.Addbooks.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAddbooks) {
//       res.json(dbAddbooks);
//     })
//     .catch(function(err) {
//       console.error("Err =" + err);
//       res.json({status: "Error", message: err});
//     });
//   });
// 
