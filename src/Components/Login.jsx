import { useEffect, useState } from 'react';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import image from '../assets/images/logoimgimg_2.jpg'

function SignIn() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  let logout = useLogout();
  
  const handleSubmit = async () => {
    try {
      let { message, token, role, loginuserId, loginemail } = await AxiosService.post(
        `${ApiRoutes.LOGIN.path}`,
        { email, password },
        { authenticate: ApiRoutes.LOGIN.auth }
      );
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('role', role);
      sessionStorage.setItem('loginuserId', loginuserId); // If you send it back in the response
      sessionStorage.setItem('loginemail', loginemail); 
      navigate('/Dashboard');
      toast.success(message);
    } catch (error) {
      toast.error(error.message || "Internal Server Error");
    }
  };

  useEffect(() => {
    logout();
  }, []);

  return (
    <section 
     className="py-26 bg-cover bg-center min-h-screen" 
    //   style={{backgroundImage: `url(${backgroundImage})`,
    // }}
    >
      <div className="container px-4 mx-auto flex justify-center items-center min-h-screen">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <div className="image w-48 h-48 mx-auto">
              <img
                src={image}
                alt={"img"}
                className="rounded-full"
              />
            </div>
            <br></br>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-indigo-900">Sign in</h2>
          </div>
          <form>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="email">Email</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="email"
                placeholder="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="password">Password</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="password"
                placeholder="**********"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div className="w-full lg:w-auto px-4">
                <a className="inline-block font-extrabold text-indigo-700 hover:underline" href="#">
                  Forgot your password?
                </a>
              </div>
            </div> */}
            <button
              className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
              type="button" 
              onClick={handleSubmit}
            >
              Sign in
            </button>
            <p className="text-center font-extrabold">
              Don&rsquo;t have an account? 
              <Link to='/Register' >
                <span className="text-red-500 hover:underline"> Sign up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
