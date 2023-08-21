import { FiUser } from 'react-icons/fi';

export default function ClientHeader() {
  return (
    <h2 style={{ color: '#393939', marginTop: '3rem' }}>
      <span style={{ marginRight: '1rem', verticalAlign: 'sub' }}>
        <FiUser size={30} />
      </span>
      Painel de clientes
      <hr />
    </h2>
  );
}
