require("mysql2/node_modules/iconv-lite").encodingExists("cesu8");
const db = require("../../models");
const seed = require("../seed.js");

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

   describe("seeds db ", () => {
      it("returns a and empty resolved promise", () => {

         // ASSERT
         expect(seed()).resolves.toBe(undefined);
         expect(console.log).toBeCalledWith("\n🚀 init table seed");
      });

      // To-Do: test seed in table (sync/no-sync)
   });
});
