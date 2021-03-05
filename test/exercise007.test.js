const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");
  
describe("sumDigits", () => {
  test("if throws an error if no input", () => {
    expect(() => {
        sumDigits();
    }).toThrow("n is required")
  });  

  test("return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumDigits ([123456789])).toBe(45);
  });
});


describe("createRange", () => {
  test("if throws an error if missing input", () => {
    expect(() => {
        createRange(1);
    }).toThrow("end is required")
      
    expect(() => {
        createRange(_, 20);
    }).toThrow("start is required")
  });  
    
  test(" create a range of numbers", () => {
      let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect(createRange(1, 9)).toBe(expected);
      
      let expected = [1, 3, 5, 7, 9];
      expect(createRange(1, 9, 2)).toBe(expected);
  
  });
});

describe("getScreentimeAlertList", () => {
    test("throws an error if fill is not provided", () => {
        let users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ];

        expect(() => {
            getScreentimeAlertList(users);
        }).toThrow("date is required");

        expect(() => {
            getScreentimeAlertList(_, "2019-05-02");
        }).toThrow("users is required");
  });

  test("returns a matrix of 1 * 1 when passed 1", () => {
    let users = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
            ]
        },
    ];

    expect(getScreentimeAlertList(users, "2019-05-02")).toEqual("beth_1234");
    expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]]);
  });
});