const config = require("../config");
const { seed } = require("./seed");

module.exports = async function () {
   // cluster 
   const cluster = require("cluster");
   const numCPUs = require("os").cpus().length;
   const clusterMap = {};
   const clusterflag = process.argv.indexOf("no-cluster") < 0 ? true : false;
   if (clusterflag) {
      if (cluster.isMaster) {
         console.log(`Master ${process.pid} is running`);

         
         // conenct to db (to seed)
         const db = require("../models");

         // drops all tables on every restart
         await db.sequelize.sync({ force: config.dropTables });
         
         // seed db if sync is true (if flushing the db)
         if (config.dropTables) 
            await seed(db);
            
         // Fork workers.
         for (let i = 0; i < numCPUs/2; i++) {
            const worker = cluster.fork();
            clusterMap[worker.id] = i;
            worker.send({ cpu: worker.id });
         }
         /*eslint-disable-next-line*/
         cluster.on("exit", (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
         });
      } else {
         // Workers can share any TCP connection
         // In this case it is an HTTP server
         process.on("message", msg => {
            process.env.cpuCore = msg.cpu;
            // console.log(`Worker ${(process.env.cpuCore)} started`);
            // console.log('Message from master:', msg);
            require("../server");

         });
      }

   } else {
      require("../server");

   }
};