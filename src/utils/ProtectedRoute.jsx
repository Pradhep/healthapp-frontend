import { useNavigate } from 'react-router-dom'
function ProtectedRoute({children}) {

    let token = sessionStorage.getItem('token')
    let navigate = useNavigate();
    
    return token?children:navigate('login')
}

export default ProtectedRoute