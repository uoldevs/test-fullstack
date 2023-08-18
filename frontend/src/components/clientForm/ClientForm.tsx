import './ClientForm.css'

type FormProps = {
  create: boolean;
};

function ClientForm( create: FormProps ) {
  return(
    <form className="form-container" onSubmit={e => e.preventDefault()}>
      <input placeholder="Nome"/>
      <input placeholder="E-mail"/>
      <input placeholder="CPF"/>
      <input placeholder="Telefone"/>
      <input placeholder="Status"/>
      <div className='buttons-container'>
      <button className='create-edit-button'>{ create ? 'Criar': 'Editar' }</button>
      <button className='return-button'>Voltar</button>
      </div>
    </form>
  )
}

export default ClientForm;