// To-Do: 
// 1. seperate routes unit test to database
// 2. integration test on server

/* eslint-disable quotes */
require("mysql2/node_modules/iconv-lite").encodingExists("cesu8");

let app;
const supertest = require('supertest');
let superApp;

// mock the log function to test side-effects
global.console.log = jest.fn();

// jest hook before all tests
beforeAll( async done => {
   app = await require('../../../server');
   superApp = supertest(app);
   
   jest.clearAllMocks();
   done(); 
   return;

});

// jest hook after all tests
afterEach(() => {
   // cleanup.
   jest.clearAllMocks();
   return;
});


describe("API routes", () => {
   describe("/api/comments routes", () => {
      
      describe("POST /api/comments routes", () => {

         // POSITIVE CASES
         it("should return redirect on succes", async done => {
            // ARRANGE
            const newComment = {comment: "testing POST /api/comments"};
                  
            // ACT
            const response = await superApp.post("/api/comments", newComment);
            
            // ASSERT
            // expect redirect status code 302
            expect(response.status).toBe(302); 
            done() 
            return;
         });  

         
      }); 
   });
});

   
