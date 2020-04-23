const filterRouter = require('express').Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');


module.exports = filterRouter;

filterRouter.get('/', (req, res, next) => {
    const term = "%" + req.query.ingredient + "%";
    console.log(term)
  db.all("SELECT * FROM recipes WHERE Ingredients LIKE $term", {$term: term}, (err, recipes) => {
    if (err) {
      next(err);
    } else {
        res.status(200).json({recipes: recipes});
      }
  });
});

