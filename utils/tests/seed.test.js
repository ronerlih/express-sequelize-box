/* eslint-disable quotes */
require("mysql2/node_modules/iconv-lite").encodingExists("cesu8");
const seed = require("../seed.js");
let db;

// mock the log function to test side-effects
global.console.log = jest.fn();

// jest hook before all tests
beforeAll(() => {
   db = require("../../models");
   jest.clearAllMocks();
});

// jest hook after all tests
afterAll(() => db.sequelize.close());

describe("Error handler middleware", () => {
   
   describe("Validation", () => {
      it("should be a function", () => {
         expect(typeof seed).toEqual("function");
      });
   });

   // negative positive error
   describe("seeds database", () => {
      it("confim the initial row in comments table", async () => {
         // ARRANGE
         const matchObj = { comment: "🚀 init" };
         
         // ACT
         await seed(db);

         // ASSERT
         expect(seed(db)).resolves.toMatchObject(matchObj);
      });
   });

   describe("Error handling", () => {
      it("Throws informative error msg if no db provided or table does not exist", async () => {
         
         // ARRANGE
         const expectedError = new Error('no Comments table in database, did you create the db?\nHave a look at: db/schema.sql and run it in your mysql client.'); 
         
         // ACT + ASSERT 
         expect(seed).toThrow(expectedError);
      });
      

      it("return rejected promise if validation doesnt pass", async () => {
         //ARRANGE
         const badMassage = new Array(501).fill('i').join('');
         const expectedError = new Object({"name": "SequelizeValidationError"});
 
         // ASSERT
         expect(db.Comment.create({comment: badMassage})).rejects.toMatchObject(expectedError);
      });
   });

   describe("Side-effects", () => {
      it("logs an 'init seed' msg", async () => {
         await seed(db);

         // ASSERT
         expect(console.log).toBeCalledWith("\n🚀 init table seed");
      });
   });
});
