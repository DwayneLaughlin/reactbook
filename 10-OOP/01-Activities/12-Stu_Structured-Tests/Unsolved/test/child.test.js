const Child = require("../child");

describe("Child", () => {
    it("should be able to take a string for a name and a number for an age and reject everything else")
    
    
    const child = new Child("steve", 4);
    
    expect(child.name).toEqual("steve");
    expect(child.age).toEqual(4);
  
});
