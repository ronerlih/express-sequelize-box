/* eslint-disable no-unused-vars */
module.exports = function (err, req, res, next) {
   if (!err) throw "called with no error";
   // potential switch based on error code or msg

   // log error to monitor
   // for development
   console.error("[node] ", err.message);
   if(res.statusCode === 200) res.status(500);

   return res.end(err.message);
};
