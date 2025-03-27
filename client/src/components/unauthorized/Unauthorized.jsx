import {Lock} from 'lucide-react'
import {useNavigate } from 'react-router'
export default function Unauthorized(){
  const navigate = useNavigate()
  return(
    <div className='unauthorized-container'>
      <Lock size={64} className='lock-icon'/>
      <h1>403 - Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
      <button onClick={() => navigate("/")} className="back-button">
        Go Back
      </button>
    </div>
  )
}