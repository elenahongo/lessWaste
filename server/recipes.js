const recipesRouter = require('express').Router();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');


module.exports = recipesRouter;

recipesRouter.get('/', (req, res, next) => {
  db.all('SELECT * FROM recipes', (err, recipes) => {
    if (err) {
      next(err);
    } else {
        res.status(200).json({recipes: recipes});
      }
  });
});



