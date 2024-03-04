import styled from 'styled-components';

const StyledHeading = styled.section`
  width: 810px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  color: var(--color-stone-0);
  text-align: center;
`;

const Title = styled.h1`
  font-size: var(--font-size-max);
  line-height: var(--line-h-s);

  @media only screen and (max-width: 640px) {
    max-width: 80%;
    font-size: 48px;
  }
`;

const Paragraph = styled.p`
  max-width: 90%;
  font-size: var(--font-size-xl);
  font-weight: 500;
  line-height: var(--line-h-m);

  @media only screen and (max-width: 640px) {
    max-width: 70%;
    font-size: var(--font-size-lg);
  }
`;

function Heading() {
  return (
    <StyledHeading>
      <Title>Interested in our business pricing?</Title>
      <Paragraph>
        Fill out the form to view details and we’ll contact you as soon as
        possible.
      </Paragraph>
    </StyledHeading>
  );
}

export default Heading;
