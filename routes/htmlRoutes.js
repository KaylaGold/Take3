var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  //deliver static files without running into issues with routing

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

  app.get("/api/mybooks", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/books.html"));
  });

  app.get("/api/mybooks/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/books.html"));
  });

  app.get("/wishlist", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/wish.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });
};
