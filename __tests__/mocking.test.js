//this is totally independent of react

//mocking helps when you are reaching for an external service outside like an API.
// you don't want to connect both in the tests, because you don't want to make to make a request every
// time you run the test and you rely on the API.

//You can mock the data you actaully sent and what is returned. This helps your tests be
//  very self containted and not brittle.

function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

// we are mocking a promise here that will resolve after 2 seconds;
Person.prototype.fetchFavFoods = function () {
  // simulating an API
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(this.foods), 2000);
  });
};

//look at Jest documentation for Mock Functions
describe("mocking learning", () => {
  it("mocks a reg function", () => {
    //this makes fetchDogs a mock function
    const fetchDogs = jest.fn();
    fetchDogs("snickers");
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith("snickers");
    fetchDogs("hugo");
    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });

  it("can create a person", () => {
    const me = new Person("Adrian", ["idk", "idk2"]);
    expect(me.name).toBe("Adrian");
  });

  //have to do async/await because we are resolving a promise
  it("can fetch foods", async () => {
    const me = new Person("Adrian", ["idk", "idk2"]);
    //mock the favFoods function just to improve the run time for our tests.
    //  we might've had to wait the 2seconds it takes for a response.
    me.fetchFavFoods = jest.fn().mockResolvedValue(["pizza", "burgs"]);
    const favFoods = await me.fetchFavFoods();
    console.log(favFoods);
    expect(favFoods).toContain("pizza");
  });
});
