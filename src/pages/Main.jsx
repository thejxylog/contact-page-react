import styled from 'styled-components';
import Heading from '../ui/Heading';
import Form from '../features/Form';

const StyledMain = styled.main`
  width: 810px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 75px;
  margin: 40px auto 94px auto;

  @media only screen and (max-width: 1024px) {
    width: 95%;
  }

  @media only screen and (max-width: 640px) {
    width: 92%;
  }
`;

function Main() {
  return (
    <StyledMain>
      <Heading />
      <Form />
    </StyledMain>
  );
}

export default Main;
