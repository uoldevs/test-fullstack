import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '@/components/Form';
import { StyledInput, StyledSelect } from '@/components/Form/styles';
import { Status } from '@/enum';
import CustomButton from '@/components/CustomButton';
import { FlexWrapper } from '@/components/layout/styles';

describe('Create / Edit Customer form', () => {
  beforeEach(() =>
    render(
      <Form onSubmit={() => console.log('Submit')}>
        <StyledInput placeholder="Nome" />
        <StyledInput placeholder="E-mail" />
        <StyledInput placeholder="CPF" type="number" />
        <StyledInput placeholder="Telefone" type="number" />

        <StyledSelect>
          <option value="" selected disabled>
            Status
          </option>
          <option value={Status.ACTIVE}>{Status.ACTIVE}</option>
          <option value={Status.INACTIVE}>{Status.INACTIVE}</option>
          <option value={Status.WAITING_FOR_ACTIVATION}>
            {Status.WAITING_FOR_ACTIVATION}
          </option>
          <option value={Status.DISABLE}>{Status.DISABLE}</option>
        </StyledSelect>

        <FlexWrapper>
          <CustomButton text="Criar" />
          <CustomButton
            text="Voltar"
            onClick={() => console.log('Back')}
            outlined
          />
        </FlexWrapper>
      </Form>
    )
  );

  it('should render the form inputs correctly', () => {
    const nameInput = screen.getByPlaceholderText('Nome');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const taxIdInput = screen.getByPlaceholderText('CPF');
    const phoneInput = screen.getByPlaceholderText('Telefone');
    const statusSelect = screen.getByRole('combobox');

    expect(nameInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(taxIdInput).toBeVisible();
    expect(phoneInput).toBeVisible();
    expect(statusSelect).toBeVisible();
  });
});
