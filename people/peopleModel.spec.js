  
const People = require("./peopleModel.js");
const db = require("../data/dbConfig.js");

describe("people model", () => {
  beforeEach(async () => {
    await db("people").truncate();
  });
  describe("insert()", () => {
    it("adds a person to the database", async () => {
      await People.insert({ name: "Rick" });
      const people = await db("people");
      expect(people).toHaveLength(1);
    });
  });
  describe("remove()", () => {
    it("adds a person and then removes them", async () => {
      const character = await People.insert({ name: "Joe" });
      await People.remove(character.id);
      const people = await db("people");
      return expect(people).toHaveLength(0);
    });
  });
});