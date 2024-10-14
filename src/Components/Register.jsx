import { useState } from 'react';
import '../index.css';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/images/logoimgimg_2.jpg';

const Register = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      console.log(`${ApiRoutes.Signup.path}`, { email, password }, { authenticate: ApiRoutes.Signup.auth });
      let { message, token, role } = await AxiosService.post(
        `${ApiRoutes.Signup.path}`,
        { email, password },
        { authenticate: ApiRoutes.Signup.auth }
      );
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('role', role);
      toast.success(message);
      navigate('/login');
    } catch (error) {
      toast.error(error.message || "Internal Server Error");
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://source.unsplash.com/featured/?fitness,health)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg p-8 shadow-lg">
        <div className="image w-48 h-48 mx-auto">
          <img
            src={image}
            alt="logo"
            className="rounded-full"
          />
        </div>
        <br></br>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-indigo-900">Register</h2>
        </div>
        <form>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="email">Email</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              type="email"
              placeholder="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="password">Password</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              type="password"
              placeholder="**********"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-extrabold" htmlFor="password">Confirm Password</label>
            <input
              className="w-full p-4 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
              type="password"
              placeholder="**********"
              id="confirmpassword"
            />
          </div>
          <button
            className="w-full py-4 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 shadow rounded transition duration-200"
            type="button"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <p className="text-center font-extrabold mt-4">
            Already have an account?
            <Link to="/Login">
              <span className="text-red-500 hover:underline"> Sign in</span>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
