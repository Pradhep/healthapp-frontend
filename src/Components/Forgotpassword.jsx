import React from 'react';

const Forgotpassword = () => {
  return (
    <section className="py-26 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Forgot Password</h2>
          </div>
          <form action="">
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="email">Email</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-800 bg-white shadow border-2 border-indigo-800 rounded"
                type="email"
                placeholder="email"
                id="email"
              />
            </div>
            {/* <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="password">Password</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="password"
                placeholder="**********"
                id="password"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-extrabold" htmlFor="password">Confirm Password</label>
              <input
                className="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="password"
                placeholder="**********"
                id="password"
              />
            </div> */}
            {/* <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label htmlFor="rememberMe">
                  <input type="checkbox" id="rememberMe" />
                  <span className="ml-1 font-extrabold">Remember me</span>
                </label>
              </div>
              <div className="w-full lg:w-auto px-4">
                <a className="inline-block font-extrabold hover:underline" href="#">
                  Forgot your password?
                </a>
              </div>
            </div> */}
            <button
              className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
              type="submit"
            >
              Confirm
            </button>
            {/* <p className="text-center font-extrabold">
              Already have an account? <a className="text-red-500 hover:underline" href="#">Confirm</a>
            </p> */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Forgotpassword;
