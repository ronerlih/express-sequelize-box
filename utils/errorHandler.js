/* eslint-disable no-unused-vars */
module.exports = function (err, req, res, next) {
   if (!err) throw "called with no error";
   // potential switch based on error code or msg

   // log error to monitor
   // for development
   console.log(err.message);
   return res.redirect("/");
};
