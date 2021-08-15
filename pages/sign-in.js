import Navbar from './../components/Navbar';
import styles from '../styles/Signup.module.css'

const SignIn = () => (
  <>
    <Navbar />
    <div className="flex justify-center mt-20">
      <div className="w-full max-w-xs">
        <form className="shadow-xl px-8 py-10">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input className="border shadow rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline" name="email" type="email" />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 font-bold mb-2">Password</label>
            <input className="border shadow rounded w-full py-1 px-3 focus:outline-none focus:shadow-outline" name="password" type="password" />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  </>
);

export default SignIn