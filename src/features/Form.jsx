import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import FormRow from '../ui/FormRow';
import { useState } from 'react';

const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 18px;
  row-gap: 26px;
  padding: 32px;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.15);

  @media only screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  & > div:nth-child(5) {
    grid-column: 1 / -1;
  }
`;

const Input = styled.input`
  padding: 20px;
  border-radius: 16px;
  background-color: var(--color-stone-0);

  &::placeholder {
    color: var(--color-stone-300);
    font-weight: 600;
  }
`;

const Select = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
  background-color: var(--color-stone-0);
`;

const Label = styled.p`
  font-size: var(--font-size-sm);
  font-weight: 600;
`;

const Icon = styled.span`
  ${props => props.active && 'transform: rotate(180deg);'}
`;

const Modal = styled.div`
  width: 100%;
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  border-radius: 16px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  background-color: var(--color-stone-0);
  overflow: hidden;
  z-index: 9;
`;

const ModalList = styled.li`
  padding: 22px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--color-stone-100);
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f2f2f2;
  }
`;

const Textarea = styled.textarea`
  height: 205px;
  padding: 22px;
  font-size: var(--font-size-sm);
  font-weight: 600;
  line-height: var(--line-h-m);
  border-radius: 16px;
  background-color: var(--color-stone-0);
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  padding: 22px;
  color: var(--color-navy-600);
  font-size: var(--font-size-lg);
  font-weight: 700;
  border-radius: 16px;
  background-color: var(--color-stone-0);

  &:hover {
    color: var(--color-stone-0);
    background-color: var(--color-navy-600);
  }
`;

function Form() {
  const { register, reset, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const [sizeModal, setSizeModal] = useState(false);
  const [subjectModal, setSubjectModal] = useState(false);

  const [activeSize, setActiveSize] = useState(0);
  const [activeSubject, setActiveSubject] = useState(0);

  const sizes = [
    { id: 0, size: '50-100 employees' },
    { id: 1, size: '100-200 employees' },
    { id: 2, size: '300+ employees' },
    { id: 3, size: 'Individual' },
  ];

  const subjects = [
    {
      id: 0,
      subject: 'Building Landing pages',
    },
    {
      id: 1,
      subject: 'Startup Homepages',
    },
    {
      id: 2,
      subject: 'Portfolio pages',
    },
    {
      id: 3,
      subject: 'Exclusive websites',
    },
    {
      id: 4,
      subject: 'More (Please write them below)',
    },
  ];

  function onSubmit() {
    setActiveSize(0);
    setActiveSubject(0);

    setSizeModal(false);
    setSubjectModal(false);

    reset();
  }

  function onSizeSelect() {
    setSizeModal(cur => (cur ? false : true));
  }

  function onSubjectSelect() {
    setSubjectModal(cur => (cur ? false : true));
  }

  function onSize(id) {
    setActiveSize(id);
    setSizeModal(false);
  }

  function onSubject(id) {
    setActiveSubject(id);
    setSubjectModal(false);
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormRow htmlFor="name" label="Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Ethan Johnson"
          {...register('name', { required: 'Please fill in the form' })}
        />
      </FormRow>

      <FormRow
        htmlFor="email"
        label="Company email"
        error={errors?.email?.message}
      >
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="ethan@johnson.com"
          {...register('email', { required: 'Please fill in the form' })}
        />
      </FormRow>

      <FormRow htmlFor="size" label="Company size">
        <Select type="button" onClick={onSizeSelect}>
          <Label>
            {sizes.filter(size => size.id === activeSize).at(0).size}
          </Label>
          <Icon active={Boolean(sizeModal)}>
            <img src="/Expand_down.svg" />
          </Icon>
        </Select>
        {sizeModal && (
          <Modal>
            <ul>
              {sizes
                .filter(size => size.id !== activeSize)
                .map(size => (
                  <ModalList key={size.id} onClick={() => onSize(size.id)}>
                    {size.size}
                  </ModalList>
                ))}
            </ul>
          </Modal>
        )}
      </FormRow>

      <FormRow htmlFor="subject" label="Subject">
        <Select type="button" onClick={onSubjectSelect}>
          <Label>
            {
              subjects.filter(subject => subject.id === activeSubject).at(0)
                .subject
            }
          </Label>
          <Icon active={Boolean(subjectModal)}>
            <img src="/Expand_down.svg" />
          </Icon>
        </Select>
        {subjectModal && (
          <Modal>
            <ul>
              {subjects
                .filter(subject => subject.id !== activeSubject)
                .map(sub => (
                  <ModalList key={sub.id} onClick={() => onSubject(sub.id)}>
                    {sub.subject}
                  </ModalList>
                ))}
            </ul>
          </Modal>
        )}
      </FormRow>

      <FormRow
        htmlFor="message"
        label="Message"
        error={
          activeSubject === 4 &&
          'Please write down the subject for your project'
        }
      >
        <Textarea
          id="message"
          name="message"
          placeholder="Write your message"
        ></Textarea>
      </FormRow>

      <SubmitButton type="submit">Contact Sales</SubmitButton>
    </StyledForm>
  );
}

export default Form;
