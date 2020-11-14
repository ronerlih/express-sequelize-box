const { getLength} = require("../index.js");

describe("testing Helpers", () => {
   describe("getLength", () => {

      it("should be a function", () => {
         expect(typeof getLength).toEqual("function");
      });
      
      // errors / undefined / negative
      it("should return zero if called with no aruments", () => {

         expect(getLength()).toEqual(0);
      });
      
      it("should return zero if called with an object", () => {

         expect(getLength({})).toEqual(0);
      });
      
      // positive cases
      it("should return appropriate array length", () => {

         expect(getLength([1])).toEqual(1);
         expect(getLength([1,1])).toEqual(2);
         expect(getLength([1,null,1,2,3])).toEqual(5);
         expect(getLength([1,-1,0,1,2,3,4,5,6,7,8])).toEqual(11);
         expect(getLength([-1])).toEqual(1);
         expect(getLength([null])).toEqual(1);
         expect(getLength([undefined])).toEqual(1);
         expect(getLength([1.05])).toEqual(1);
         expect(getLength([1.0000000000005])).toEqual(1);
         expect(getLength([BigInt(2 ** 53)])).toEqual(1);
         expect(getLength([Infinity])).toEqual(1);
      });
      
   });
});