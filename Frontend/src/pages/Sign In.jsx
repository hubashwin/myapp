import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
const SignIn = () => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const { authName,
        setauthName,
        authEmail,
        setauthEmail,
        isLoggedIn,
        setisLoggedIn } = useAuth();

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('https://shopaze-backendbyash.onrender.com/sign-in', { name, email, password })
            .then(result => {
                if (result.data === "false") {
                    alert(`Hello welcome ${name}`)
                    setauthName(name)
                    setauthEmail(email)
                    setisLoggedIn(true);
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mx-[470px] my-[100px]'>
                <div className="w-[460px] h-[450px]  backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 shadow-black bg-slate-200 text-gray-500">
                    <h2><pre className="text-2xl font-bold mb-5">            Sign In</pre></h2>
                    <div className="mb-4">
                        <label htmlfor="name" className="block mb-2 text-sm font-medium">Your name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text"
                            id="name"
                            className="border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-gray-800 w-full py-2.5 px-4"
                            placeholder="Name"
                            required

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlfor="email" className="block mb-2 text-sm font-medium">Your email</label>
                        <input onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-gray-800 w-full py-2.5 px-4"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlfor="password" className="block mb-2 text-sm font-medium">Your password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password"
                            className="border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-gray-800 w-full py-2.5 px-4"
                            placeholder="password"
                            required
                        />
                    </div>
                    <div>
                        <p className="text-red-500 pb-5" id="password"></p>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <button
                            type="submit"
                            className="text-white bg-blue-800 hover:bg-gray-700 focus:ring-2 focus:ring-slate-500 font-medium rounded-lg text-sm py-2.5 px-5 w-[200px]"
                        >
                            Sign In
                        </button>
                        <div className="flex items-center text-sm">
                            <p>Already have an account?</p>
                            <Link to="/login" className="underline cursor-pointer ml-1">Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SignIn;
