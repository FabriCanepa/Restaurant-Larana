import { Link } from 'react-router-dom'
import imgError from '../../assets/images/copaError1.svg'
import './Error404.css'

const Error404 = () => {
  return (
      <div className='error-container d-flex justify-content-center text-center align-items-center'>
        <img src={imgError} alt="Imagen de Error404" />
        <h1 className='py-4'>Error 404</h1>
        <button type='button'><Link to='/'>Go Back</Link></button>
      </div>
      
  )
}

export default Error404