import { FiUser } from 'react-icons/fi'
import './headerClientDashbord.css'

function HeaderClientDashbord() {
 return(
  <div className='dashbord-container'>
    <span className='dashbord-span'><FiUser/></span><p className='dashbord-p'>Painel de cliente</p>
  </div>
 )
}

export default HeaderClientDashbord;