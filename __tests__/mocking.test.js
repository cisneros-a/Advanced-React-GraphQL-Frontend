class Person {
  constructor(name, foods) {
    this.name = name;
    this.foods = foods;
  }
  fetchFavFoods() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.foods), 2000);
    });
  }
}

describe("mocking learning", () => {
  it("mocks a reg function", () => {
    const fetchDogs = jest.fn();
    fetchDogs(["dog1", "dog2"]);
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith(["dog1", "dog2"]);
    fetchDogs("hugo");
    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });

  it("can create a person", () => {
    const me = new Person("Adrian", ["Pizza"]);
    expect(me.name).toEqual("Adrian");
  });

  it("can fetch foods", async () => {
    const me = new Person("Adrian", ["pizza"]);
    const favFoods = await me.fetchFavFoods();
    expect(favFoods).toContain("pizza");
  });
});
