import ItemComponent from "../components/Item";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

//Snapshot tests take a snapshot of what that particular thing looks like.
// And it will be added to the snapshots folder when you run the tests. And whenever,
//  you run the tests again, it will compare the new snapshot to the previous one to see if
//  anything has changed.
//You can update the snapshot in the console by pressing "u".

//whenever you create a snapshot, you need to verify that it is correct. Anything could be in
//  the snapshot. So it's important to make sure the snapshot is correct.

//What's also neat is that any update you do in the code base that affects and updates a
//  snapshot test will also show up in github and give a more visual idea of the code changes.

const fakeItem = {
  id: "AVC123",
  title: "itemmm",
  price: 4000,
  description: "test item",
  image: "dog.jpg",
  largeImage: "largedog.jpg",
};

describe("<Item/>", () => {
  it("renders and matches the snapshot", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //the toJSON function allows us to remove all the extra-information we are receiving
    // from our snapshot to make it more readable.
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
