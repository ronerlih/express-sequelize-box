/* eslint-disable quotes */

import server from '../../server';

jest.mock("../../models");
import seed from "../seed.js";

// mock the log function to test side-effects
global.console.log = jest.fn();

// jest hook before all tests
beforeEach(async () => {
   jest.clearAllMocks();
});

// jest hook after all tests
afterEach(() => {
// cleanup.
   jest.clearAllMocks();
});

describe("🚀 server.js tests", () => {
   
   // placeholder
   expect(true).toBe(true);
   });

   
