import { useContext, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { auth } from "../../Components/Utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { dataContext } from "../../Components/DataProvider/DataProvider"; 
import { Type } from "../../Components/Utils/action.type";
import {ClipLoader} from 'react-spinners'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState({
    signIn:false,
    signUp:false
  })
  const [error,setError]=useState('')
  const [state,dispatch]= useContext(dataContext)

  const navigate= useNavigate();


  const handleAuth = (e) => {
    e.preventDefault();
    // console.log(e.target.name)
    if (e.target.name === "signUp") {
      setError('')
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        dispatch({type:Type.ADD_USER,item:user})
        // console.log(state?.user)
        setLoading({...loading,signUp:false})
        navigate('/')
        
      })
      .catch((error) => {
        setLoading(false)
        console.log(error.message);
        setError(error.message)
      });
    } else {
      setError('')
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        dispatch({ type: Type.ADD_USER, item: user });
        // console.log(state?.user)
        
        setLoading({ ...loading, signIn: false });
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message)
        setLoading({ ...loading, signIn: false });
        setError(error.message);
      }
    )
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Amazon Logo */}
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="w-28 mb-4"
        />
      </Link>

      {/* Sign-in Card */}
      <div className="w-full max-w-sm border border-gray-300 rounded-md p-6 bg-white shadow-sm">
        {/* Title */}
        {
          error.length !=0 && <p className="text-red-600 text-center">{error}</p>
        }
        <h1 className="text-2xl font-semibold mb-4">Sign-in</h1>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            E-mail
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            className="w-full border border-gray-400 rounded-sm p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            className="w-full border border-gray-400 rounded-sm p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          name="signIn"
          onClick={handleAuth}
          className="w-full bg-primary-color hover:bg-primary-shade text-sm font-medium py-2 rounded-sm border border-none"
        >
          {loading.signIn ? <ClipLoader size={15} color="#000" className="flex items-center" /> : "Sign In"}
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-600 mt-4 leading-5">
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* Divider Button */}
        <button
          type="submit"
          name="signUp"
          onClick={handleAuth}
          className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-sm py-2 border border-gray-400 rounded-sm"
        >
          {loading.signUp ? (
            <ClipLoader size={15} color="#000" className="flex items-center"/>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
