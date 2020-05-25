import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

// This component is where we are getting all the user information
//  and passing it to all the other components
// The Nav component is using it to determine if we are logged in and that
//  will determine which tabs it shows us
// The cart Component is also wrapped in User to determine to show cart or not

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
    }
  }
`;

const User = (props) => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {/* we are passing in the res directly to the child component */}
    {(payload) => props.children(payload)}
  </Query>
);

User.propTypes = {
  children: PropTypes.func.isRequired,
};

export default User;
export { CURRENT_USER_QUERY };
