require("mysql2/node_modules/iconv-lite").encodingExists("cesu8");
const config = require("../../config");
const seed = require("../seed.js");
let db;

global.console.log = jest.fn();

// clear mocks before each test
beforeEach(() => {
   db = require("../../models");
   jest.clearAllMocks();
});

// close db connection
afterEach(() => db.sequelize.close());

describe("Error handler middleware", () => {
   describe("Validation", () => {

      it("should be a function", () => {
         expect(typeof seed).toEqual("function");
      });
   });

   describe("Resolve if DB is not flushed ", () => {

      if ( !config.sync )
         it("should return a resolved promise if sync=false", () => {
         
            // assert a returned promise
            expect(seed()).resolves.toBe(undefined);
         });

      if ( config.sync )
         it("Run only after flushing db (force: sync/noSync)", () => {
         
            // ACT
            seed(db.Test);

            // ASSERT
            expect(console.log).toBeCalledWith("\n🚀 init table seed");
         });

      // To-Do: test seed in table (sync/no-sync)
      
   });

});