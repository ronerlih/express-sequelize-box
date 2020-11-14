
require("mysql2/node_modules/iconv-lite").encodingExists("cesu8");
const seed = require("../seed.js");
const db = require("../../models");

global.console.log = jest.fn();

// clear mocks before each test
beforeEach(() => {
   jest.clearAllMocks();
});

// close db connection
afterAll(() => db.sequelize.close());

describe("Error handler middleware", () => {
   describe("Validation", () => {

      it("should be a function", () => {
         expect(typeof seed).toEqual("function");
      });
   });

   describe("Production vs Development", () => {

      it("should return a resolved promise if in production", () => {
         global.process.env.NODE_ENV = "production";
         
         // assert a returned promise
         expect(seed()).resolves.toBe(undefined);
      });

      it("should return a resolved promise if in production", () => {
         // ARRANGE
         global.process.env.NODE_ENV = "development";
         
         // ACT
         seed(db.Test);

         // ASSERT
         expect(console.log).toBeCalledWith("\n🚀 init table seed");

      });

      // To-Do: test seed in table (sync/no-sync)
      
   });

});