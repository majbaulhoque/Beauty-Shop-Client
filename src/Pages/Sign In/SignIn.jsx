import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        logIn(email, password)
        .then(result =>{
            // navigate
            navigate(location.state ? location.state.from : '/');
            
            console.log(result.user);
            e.target.reset();
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="card w-full max-w-sm shrink-0  mx-auto mt-16">
                <h2 className="font-bold text-3xl text-blue-500 text-center">Log In</h2>
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <p>Don{`'`}t have an account ? <Link className="text-blue-600 font-bold" to='/signUp'>SignUp</Link></p>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;