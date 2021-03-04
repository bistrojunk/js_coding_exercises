const {
    areWeCovered
  } = require("../challenges/exercise006");
  
  describe("areWeCovered", () => {
    test("The function should return true/false depending on whether there are enough staff scheduled for the given day", () => {
      const staff = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                     { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                     { name: "Susan", rota: ["Saturday", "Tuesday", "Wednesday"] }
                    ]
      const day = "Tuesday"
      expect(areWeCovered(staff, day)).toBe(true);
    });
  });