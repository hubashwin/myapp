import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

function Login() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('https://shopaze-backendbyash.onrender.com/login', { name, email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    alert(`Welcome back ${name}`)
                    navigate("/")
                }

                else if (result.data === "The password is incorrect") {
                    let h1 = document.createElement('h1')
                    h1.innerText = "password is incorrect";
                }

                else {
                    alert(`please create an account first!`)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='mx-[470px] my-[100px]'>
                <div className="w-[460px] h-[450px]  backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 shadow-black bg-slate-200 text-gray-500">
                    <h2><pre className="text-2xl font-bold mb-5">            Log In</pre></h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Your name</label>
                        <input onChange={() => setName(name)} type="text"
                            id="name"
                            className="border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-gray-800 w-full py-2.5 px-4"
                            placeholder="Name"
                            required

                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                        <input onChange={() => setEmail(email)}
                            type="email"
                            id="email"
                            className="border-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-gray-800 w-full py-2.5 px-4"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                        <input onChange={() => setPassword(password)} type="password" id="password"
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
                            Log In
                        </button>
                        <div className="flex items-center text-sm">
                            <p>Don't have an account?</p>
                            <Link to="/sign-in" className="underline cursor-pointer ml-1">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login;
