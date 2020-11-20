const errorHandler = require("../errorHandler.js");

// var setup
   global.console.warn = jest.fn();
// mocking a response object for the handler to use, adding only th eredirect method that will be used.
const mockRes = ({status: jest.fn(), statusCode: 200, end: jest.fn()});
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
      
      it("should set status to 500 if no status assigned", () => {
         
         // To-Do: use supertest for testing routes
         
         // setup a fake request, 
         const fakeError = new Error("fake error msg");
         
         // ACT
         errorHandler(fakeError, mockRequest, mockRes);

         // ASSERT
         expect(mockRes.status).toBeCalledWith(500);    
      });

      it("should not set status if it's already set (not 200)", () => {
         
         // To-Do: use supertest for testing routes
         
         // setup a fake request, 
         const fakeError = new Error("fake error msg");
         // mocking a response object for the handler to use, adding only th eredirect method that will be used.
         const mockRes = ({status: jest.fn(), statusCode: 401, end: jest.fn()});
         const mockRequest = {};

         // ACT
         errorHandler(fakeError, mockRequest, mockRes);

         // ASSERT
         expect(mockRes.status).not.toBeCalled();    
      });

      it("should send the error msg to front end", () => {
         
         // To-Do: use supertest for testing routes
         
         // setup a fake request, 
         const fakeError = new Error("fake error msg 1");
         // mocking a response object for the handler to use, adding only th eredirect method that will be used.
        
         // ACT
         errorHandler(fakeError, mockRequest, mockRes);

         // ASSERT
         expect(mockRes.end).toBeCalledWith(fakeError.message);    
      });

      
      it("should log error (side effects test)", () => {
         const mockRes = ({status: jest.fn(), statusCode: 200, end: jest.fn()});
         const mockRequest = {};

         // ARRANGE 
         // setup a logging library for monitoring, 
         const fakeError = new Error("fake error msg 2");

         // ACT 
         errorHandler(fakeError, mockRequest, mockRes);
         
         // ASSERT
         expect(console.warn).toBeCalled();
         expect(console.warn).toBeCalledWith("[node] ", fakeError.message);
      });
   });
});
