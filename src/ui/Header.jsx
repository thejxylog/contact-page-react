import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 20px 72px;

  @media only screen and (max-width: 1024px) {
    padding: 20px 30px;
  }

  @media only screen and (max-width: 640px) {
    padding: 20px 24px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src="/contact-form-icon.svg" />
    </StyledHeader>
  );
}

export default Header;
