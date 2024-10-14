import Login from '../Components/Login.jsx'
import Register from '../Components/Register.jsx'
import Forgotpassword from '../Components/Forgotpassword.jsx'
import Profile from '../Components/Profile.jsx'
import Dashboard from '../Components/Dashboard.jsx'
import Sidebar from '../Components/Sidebar.jsx'
import Navbar from '../Components/Navbar.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import About from '../Components/About.jsx'
import HealthGoals from '../Components/HealthGoals.jsx'
//import AdminGuard from './AdminGuard.jsx'
import '../Scripts/main.js'
import '../Scripts/chart.sample.js'
import Exercises from '../Components/Exercises.jsx'
import Nutritions from '../Components/Nutritions.jsx'


export default [
    {
        path:'/Login',
        element:<Login/>
    },
    {
        path:'/Dashboard',
        element:<ProtectedRoute><Sidebar/><Dashboard/><Navbar/></ProtectedRoute>
              
    },
    {
        path:'/Exercises',
        element:<ProtectedRoute><Sidebar/><Navbar/><Exercises/></ProtectedRoute>
    },
    {
        path:'/Nutritions',
        element:<ProtectedRoute><Sidebar/><Navbar/><Nutritions/></ProtectedRoute>
    },
    {
        path:'/HealthGoals',
        element:<ProtectedRoute><Sidebar/><Navbar/><HealthGoals/></ProtectedRoute>
    },
    {
        path:'/Profile',
        element:<ProtectedRoute><Sidebar/><Navbar/><Profile/></ProtectedRoute>
    },
    {
        path:'/About',
        element:<ProtectedRoute><Sidebar/><Navbar/><About/></ProtectedRoute>
    },
    {
        path:'/Register',
        element:<Register/>
    },
    {
        path:'/Forgotpassword',
        element:<Forgotpassword/>
    },
    {
        path:'/',
        element:<Login/>
    }

]