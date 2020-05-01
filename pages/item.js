import SingleItem from "../components/SingleItem";

const Item = (props) => (
  <div>
    {/* props were passed in through props in Item.js */}
    <SingleItem id={props.query.id} />
  </div>
);

export default Item;
