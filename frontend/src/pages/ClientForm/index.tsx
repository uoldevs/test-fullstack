import { yupResolver } from '@hookform/resolvers/yup';
import { FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { HiOutlineIdentification } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import { IDataForm } from '../../interfaces';
import styles from './styles.module.scss';
import { CustomInput } from '../../components/Input';
import { Button } from '../../components/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { validationSchema } from '../../schemas';
import {
  createClient,
  findClient,
  updateClient,
} from '../../services/clientResources';
import { ChangeEvent, useEffect, useState } from 'react';
import ClientHeader from '../../components/ClientHeader';

export default function ClientForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [clientData, SetClientData] = useState<IDataForm>({
    name: '',
    email: '',
    cpf: '',
    phonenumber: '',
    status: 'Ativo',
  });
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const data = await findClient(params.id);
        if (data) SetClientData(data);
        else setNotFound(true);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IDataForm>({
    resolver: yupResolver(validationSchema),
  });

  const cpfMask = (value: ChangeEvent<HTMLInputElement>) => {
    value.currentTarget.value = value.currentTarget.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const phonenumberMask = (value: ChangeEvent<HTMLInputElement>) => {
    value.currentTarget.value = value.currentTarget.value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4,5})(\d{4})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const removeMasks = (dataForm: IDataForm) => {
    dataForm.cpf = dataForm.cpf.replace(/[.-]/g, '');
    dataForm.phonenumber = dataForm.phonenumber.replace(/[()-\s]/g, '');
    return dataForm;
  };

  const onSubmit = async (dataForm: IDataForm) => {
    const data = removeMasks(dataForm);
    console.log(params.id, data);
    params.id ? await updateClient(params.id, data) : await createClient(data);
    if (!params.id) reset();
  };

  return (
    <main className={styles.container}>
      <ClientHeader />
      {params.id ? (
        <div className={styles.subtext}>
          <h3>Atualizar usuário</h3>
          <p>Informe os campos a seguir para atualizar usuário:</p>
        </div>
      ) : (
        <div className={styles.subtext}>
          <h3>Novo usuário</h3>
          <p>Informe os campos a seguir para criar novo usuário:</p>
        </div>
      )}
      {!notFound ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          autoComplete="off"
          autoCapitalize="off"
        >
          <CustomInput
            placeholder={params.id ? clientData.name : 'Nome'}
            Icon={FiUser}
            {...register('name')}
            error={errors.name}
          />

          <CustomInput
            placeholder={params.id ? clientData.email : 'E-mail'}
            Icon={FiMail}
            {...register('email')}
            error={errors.email}
          />

          <CustomInput
            placeholder={
              params.id
                ? clientData.cpf
                    .replace(/\D/g, '')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                    .replace(/(-\d{2})\d+?$/, '$1')
                : 'CPF'
            }
            Icon={HiOutlineIdentification}
            {...register('cpf')}
            error={errors.cpf}
            onInput={cpfMask}
          />

          <CustomInput
            placeholder={
              params.id
                ? clientData.phonenumber
                    .replace(/\D/g, '')
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{4,5})(\d{4})/, '$1-$2')
                    .replace(/(-\d{4})\d+?$/, '$1')
                : 'Telefone'
            }
            Icon={FiPhone}
            {...register('phonenumber')}
            error={errors.phonenumber}
            onInput={phonenumberMask}
          />

          <select
            className={styles.selectForm}
            {...register('status')}
            required
          >
            <option
              value="Ativo"
              disabled
              selected={params.id === undefined}
              hidden
              style={{ color: '#bbc0c8' }}
            >
              Status
            </option>
            <option value="Ativo" selected={clientData.status === 'Ativo'}>
              Ativo
            </option>
            <option value="Inativo" selected={clientData.status === 'Inativo'}>
              Inativo
            </option>
            <option
              value="Aguardando ativação"
              selected={clientData.status === 'Aguardando ativação'}
            >
              Aguardando ativação
            </option>
            <option
              value="Desativado"
              selected={clientData.status === 'Desativado'}
            >
              Desativado
            </option>
          </select>

          <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem' }}>
            <Button title={params.id ? 'Atualizar' : 'Criar'} type="submit" />
            <Button title="Voltar" onClick={() => navigate('/')} />
          </div>
        </form>
      ) : (
        <h1 style={{ textAlign: 'center', paddingTop: '3rem' }}>
          Usuário não encontrado
        </h1>
      )}
    </main>
  );
}
