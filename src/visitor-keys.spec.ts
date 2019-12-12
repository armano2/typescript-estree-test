import { visitorKeys } from "@typescript-eslint/typescript-estree";

describe('visitor-keys', () => {

  it(`compare`, function() {
    const newKeys = require('../visitor-keys.json');

    expect(newKeys).toEqual(visitorKeys);
  })
});
