import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = (props = {}) => {
    const { googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin().then(() => {
            navigate("/");
        });
    };

    const handleGitHubLogin = () => {
        githubLogin().then(() => {
            navigate("/");
        });
    };

    const { children } = props || {};
    return (
        <div>
            {children}
            <div className="mt-6 space-y-2">
                <button
                    onClick={handleGoogleLogin}
                    className="btn w-full font-semibold hover:bg-gray-300 transition-colors duration-300"
                >
                    <FaGoogle size={25} /> Login with Google
                </button>
                <button
                    onClick={handleGitHubLogin}
                    className="btn w-full font-semibold hover:bg-gray-300 transition-colors duration-300"
                >
                    <FaGithub size={25} /> Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default Login;
