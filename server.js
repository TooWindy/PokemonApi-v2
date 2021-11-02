const db = require('./server/db/database')
const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
const app = require('./server/app')

db.sync()
  .then(()=> {
    console.log("The db is synced")
    app.listen(port, function () {
      console.log("Knock, knock");
      console.log("Who's there?");
      console.log(`Your server, listening on port ${port}`);
})})

