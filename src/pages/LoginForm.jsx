import { Link } from "react-router-dom";
import Login from "../components/Login";

const LoginForm = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-center text-2xl font-bold">Login your account</h2>
                <form className="card-body p-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <a
                                href="#"
                                className="text-xs text-red-500 font-medium hover:underline underline-offset-2 hover:!text-red-500"
                            >
                                Forgot password?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral !rounded-md">Login</button>
                    </div>
                </form>
                <Login></Login>
                <p className="mt-7 text-center font-semibold">Don&apos;t Have An Account <Link className="text-red-500 hover:underline underline-offset-2" to="/auth/register">Register</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;
