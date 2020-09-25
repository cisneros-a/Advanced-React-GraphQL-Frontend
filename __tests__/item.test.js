import ItemComponent from "../components/Item";
import { shallow } from "enzyme";
import PriceTag from "../components/styles/PriceTag";

const fakeItem = {
  id: "AVC123",
  title: "itemmm",
  price: 5000,
  description: "test item",
  image: "dog.jpg",
  largeImage: "largedog.jpg",
};

describe("<Item/>", () => {
  it("renders and displays properly", () => {
    //this is a mounted component
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //debug() is a method to show all the HTML of the rendered component
    //  and you can see all the methods you can call for shallow rendered components.
    //.dive() will render 1 level deeper. Like or PriceTag, it will render out that component if
    //  we need to grab something from in there.
    const PriceTag = wrapper.find("PriceTag");
    expect(PriceTag.children().text()).toBe("$50");
  });

  it("renders and the price tag and title properly", () => {
    //shallow() is a Shallow Render. It will only render the top level. In this case, it'll render our ItemComponent
    // and show the nested components, but it wont render those.
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const PriceTag = wrapper.find("PriceTag"); // <PriceTag/>
    //.debug() is a method from Enzyme that can be user on wrappers (shallow render)
    //  console.log(wrapper.debug());

    expect(PriceTag.children().text()).toBe("$50");
    //here we are looking for the a tag within the Title
    expect(wrapper.find("Title a").text()).toBe(fakeItem.title);
  });

  it("renders image properly", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const img = wrapper.find("img");
    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title);
    console.log("rendered image properly");
  });

  it("renders out the button properly", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const buttonList = wrapper.find(".buttonList");
    expect(buttonList.children()).toHaveLength(3);
    expect(buttonList.find("Link").exists()).toBe(true);
    expect(buttonList.find("AddToCart").exists()).toBe(true);
    expect(buttonList.find("DeleteItem").exists()).toBe(true);
  });
});
