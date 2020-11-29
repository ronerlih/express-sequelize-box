const config = require("./config");
const express = require("express");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");
const db = require("./models");
const { seed } = require("./utils/seed");
const errorHandler = require("./utils/errorHandler");

module.exports = (() => {
   return new Promise(async (resolve) => {
      const PORT = process.env.PORT || 3000;
      const app = express();

      // good place for a logging middleware

      // Serve static content for the app from the "public" directory in the application directory.
      app.use(express.static("public"));

      // Parse application body
      app.use(express.urlencoded({ extended: true }));
      app.use(express.json());

      const exphbs = require("express-handlebars");
      const helpers = require("./views/helpers");

      app.engine(
         "handlebars",
         exphbs({
            defaultLayout: "main",
            partialsDir: __dirname + "/views/partials/",
            helpers: helpers,
         })
      );
      app.set("view engine", "handlebars");

      app.use("/api", apiRoutes);
      app.use(htmlRoutes);

      // error handling
      app.use(errorHandler);

      // drops all tables on eevery restart
      await db.sequelize.sync({ force: config.dropTables });

      // add close method on app (for testing db)
      app.close = db.sequelize.close;

      // seed db if sync is true (if flushing the db)
      if (config.dropTables) await seed(db);

      app.listen(PORT, () => {
         console.log("\n🌎 => live on http://localhost:%s", PORT);
         return resolve(app);

      });

   });
})();
