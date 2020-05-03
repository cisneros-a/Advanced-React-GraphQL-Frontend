import Signup from "../components/Signup";
import styled from "styled-components";

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

const SignupPage = (props) => (
  <Columns>
    <Signup />
    <Signup />
    <Signup />
    <Signup />
    <Signup />
  </Columns>
);

export default SignupPage;
