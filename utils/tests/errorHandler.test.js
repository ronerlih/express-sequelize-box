const errorHandler = require("../errorHandler.js");
global.console.log = jest.fn();
const mockRequest = {};

// clear mocks before each test
beforeEach(() => {
   jest.clearAllMocks();
});

describe("Error handler middleware", () => {
   describe("Validation", () => {

      it("should be a function", () => {
         expect(typeof errorHandler).toEqual("function");
      });

      it("should throw an error if provided no arguments", () => {
         expect(errorHandler).toThrow();
      });
   });

   describe("Error handling", () => {

      it("should redirect regardless of the error", () => {
         
         // setup a fake request, 
         // To-Do: use supertest for testing routes
         const fakeError = new Error("fake error msg");
         // mocking a response object for the handler to use, adding only th eredirect method that will be used.
         const mockRes = { redirect: jest.fn(() => "redirected") };

         expect(
            errorHandler(fakeError, mockRequest, mockRes))    
            .toEqual( "redirected" );
      });

      it("should log error", () => {
         
         // ARRANGE 
         // setup a logging library for monitoring, 
         const fakeError = new Error("fake error msg");
         const mockRes = { redirect: jest.fn(() => "redirected") };

         // ACT 
         errorHandler(fakeError, mockRequest, mockRes);
         
         // ASSERT
         expect(console.log).toBeCalled();
         expect(console.log).toBeCalledWith("fake error msg");
      });
   });
});
