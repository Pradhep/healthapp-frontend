//import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminGuard({children}) {

    let navigate = useNavigate();
    let role = sessionStorage.getItem('role')
    
    return role==='Admin'?children:navigate('login')
}
