var db = require("../models");

module.exports = function (app) {
  // Load Post Page
  app.get("/post", function (req, res) {
    res.render("post", {
      title: "Post.it",
      msg: "Post Creation",
    });
  });

  app.get("/author", function (req, res) {
      res.render("author", {
        title: "Post.it",
        msg: "Author Creation",
        examples: dbExamples
      });
    });


  app.get("/category", function (req, res) {
    res.render("category", {
      msg: "Post a new category!"
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
