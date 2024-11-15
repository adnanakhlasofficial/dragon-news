import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = (props = {}) => {
    const {children} = props || {};
    return (
        <div>
            {children}
            <div className="mt-6 space-y-2">
                <button className="btn w-full font-semibold hover:bg-gray-300 transition-colors duration-300">
                    <FaGoogle size={25} /> Login with Google
                </button>
                <button className="btn w-full font-semibold hover:bg-gray-300 transition-colors duration-300">
                    <FaGithub size={25} /> Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default Login;
