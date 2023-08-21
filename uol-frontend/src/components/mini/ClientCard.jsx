import { Dot, Trash2 } from 'lucide-react';
import Button from './Button';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function ClientCard(props) {

    const navigate = useNavigate();


    const status = {
        Ativo: {
            color: '#4BAF5C',
            text: 'Ativo'
        },

        Inativo: {
            color: '#D73343',
            text: 'Inativo'
        },
        Aguardando: {
            color: '#D0A311',
            text: 'Aguardando ativação'
        },
        Desativado: {
            color: '#D1D1D1',
            text: 'Desativado'
        }
    }

    const deleteClient = async (clientId) => {
        Swal.fire({
            title: 'Você tem certeza?',
            text: "Você não será capaz de reverter essa ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar cliente.',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://uol-api.onrender.com/${clientId}`, {
                    method: 'DELETE',
                  }).then(() => handleDelete())
              Swal.fire(
                'Cliente deletado!',
              )
            }
          })
      };

      const handleDelete = () => {
        props.loading(true)
        props.apiCall()
      }


const formatCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

const formatPhone = (phone) => {
    return phone.replace(/(\d{2})(\d?)(\d{4,5})(\d{4})/, '($1) $2$3-$4');
}



    return (
        <div className="w-full h-28 p-6 justify-between items-center flex flex-row border-2 border-gray-100 gap-4">
            <div className='w-1/4'>
                <p className="text-lg text-gray-500 font-semibold overflow-auto">
                    {props.name}
                </p>
                <p className="text-gray-400 font-normal text-lg break-words">
                    {props.email}
                </p>
            </div>

            <div className='w-1/4 overflow-auto'>
                <p className="text-lg text-gray-500 font-semibold">
                    {formatCPF(props.cpf)}
                </p>
                <p className="text-gray-400 font-normal text-lg">
                    {formatPhone(props.phone)}
                </p>
            </div>
            <div className='flex flex-row w-1/4 items-center relative overflow-auto'>
                <Dot size={75} color={status[props.status].color} strokeWidth={3} />
                <p className='absolute ml-14'>{status[props.status].text}</p>
            </div>

            <div className='w-1/4 h-auto flex flex-row justify-center overflow-auto content-center gap-8'>
            <Button name="Editar" size="big" background="white" active={() => navigate(`/edit/${props.id}`)} />
            <div onClick={() => deleteClient(props.id)} className='self-center cursor-pointer'><Trash2 size={32} color="#000000" strokeWidth={1}/></div>
            </div>
        </div>



    )
}

ClientCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default ClientCard