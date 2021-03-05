const {
  sumMultiples,
  areWeCovered,
  createMatrix,
  isItPrime,
  isValidDNA,
  getComplementaryDNA
} = require("../challenges/exercise006");
  
describe("sumMultiples", () => {
  test("if throws an error if isn't an array", () => {
    expect(() => {
    sumMultiples();
    }).toThrow("arr is required")
  });  

  test("return the sum of any numbers which are a multiple of 3 or 5", () => {
    const result = sumMultiples ([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
  });

  test("test it works with decimals", () => {
    const result = sumMultiples ([1, 3, 5.0, 2, 12, 10]);
    const expected = 30;
    expect(result).toBe(expected);
  });

  test("returns 0  if there are no  multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
  });
});


describe("areWeCovered", () => {
  test("The function should return true/false depending on whether there are enough staff scheduled for the given day", () => {
    const staff = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
                    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
                   { name: "Susan", rota: ["Saturday", "Tuesday", "Wednesday"] }
                  ]
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
  });

  test("Returns false if <3 staff scheduled to work", () => {
    const staff = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Susan", rota: ["Saturday", "Tuesday", "Wednesday"] }
    ]
    expect(areWeCovered(staff, "Friday")).toBe(false);
  });

  test("it returns false if there are no staff at all", () => {
    const staff = [{ name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Susan", rota: ["Saturday", "Tuesday", "Wednesday"] }
    ]

    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });
});

describe("createMatrix", () => {
  test("throws an error if fill is not provided", () => {
    expect(() => {
      createMatrix(1);
    }).toThrow("fill is required");
  });

  test("returns a matrix of 1 * 1 when passed 1", () => {
    const result = createMatrix(1, "foo");
    const expected = [["foo"]]
    expect(result).toEqual(expected);
  });

  test("returns a matrix of 3 * 3 when passed 3", () => {
    const result = createMatrix(3, "foo");
    const expected = [["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]
    expect(result).toEqual(expected);
  });
});

describe("isItPrime", () => { 
  test("throws an error if n is not provided", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");
  });
  
  test("returns true/false if prime/not prime", () => {
    expect(isItPrime(7)).toEqual(true);
    expect(isItPrime(9)).toEqual(false);
  });
});


describe("isValidDNA", () => { 
  test("throws an error if DNA string is not provided", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });
  
  test("returns true/false if valid/invalid DNA", () => {
    let dna = 'C';
    expect(isValidDNA(dna)).toEqual(true);

    dna = 'CGTATAGTC'
    expect(isValidDNA(dna)).toEqual(true);

    dna = 'ABCDEFG'
    expect(isValidDNA(dna)).toEqual(false);
  });
});


describe("getComplementaryDNA", () => { 
  test("throws an error if DNA string is not provided", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");
  });
  
  test("returns complementary DNA sequence", () => {
    let dna = 'C';
    expect(getComplementaryDNA(dna)).toEqual('G');

    dna = 'CGTATAGTC'
    expect(getComplementaryDNA(dna)).toEqual('GCATATCAG');
  });
});