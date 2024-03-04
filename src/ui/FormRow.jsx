import styled from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;

const LabelSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  color: var(--color-stone-0);
  font-size: var(--font-size-sm);
  font-weight: 500;
  text-transform: capitalize;
`;

const Error = styled.p`
  color: var(--color-warning-500);
  font-size: var(--font-size-sm);
  font-weight: 600;
`;

function FormRow({ htmlFor, label, children, error }) {
  return (
    <StyledFormRow>
      <LabelSection>
        <Label htmlFor={htmlFor}>{label}</Label>
        {error && <Error>* {error}</Error>}
      </LabelSection>
      {children}
    </StyledFormRow>
  );
}

export default FormRow;
