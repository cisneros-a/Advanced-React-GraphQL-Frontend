import Signup from "../components/Signup";
import styled from "styled-components";
import SignIn from "../components/Signin";

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

const SignupPage = (props) => (
  <Columns>
    <Signup />
    <SignIn />
  </Columns>
);

export default SignupPage;
