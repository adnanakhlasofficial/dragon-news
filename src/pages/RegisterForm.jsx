import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const RegisterForm = () => {
    const {
        createNewUser,
        setUser,
        updateUserProfile,
        verifyUser,
        logoutUser,
    } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const displayName = form.get("full-name");
        const photoURL = form.get("photo-url");
        const email = form.get("email");
        const password = form.get("password");

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName, photoURL })
                    .then(() => {
                        verifyUser().then(() => {
                            logoutUser();
                            alert("Email Verification sent!");
                            navigate("/auth/login");
                        });
                    })
                    .catch((err) => console.log(err));
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-center text-2xl font-bold">
                    Register your account
                </h2>
                <form onSubmit={handleSubmit} className="card-body p-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="full-name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Photo
                            </span>
                        </label>
                        <input
                            type="text"
                            name="photo-url"
                            placeholder="Enter your photo url"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral !rounded-md">
                            Register
                        </button>
                    </div>
                </form>
                <p className="mt-7 text-center font-semibold">
                    Already Have An Account{" "}
                    <Link
                        className="text-red-500 hover:underline underline-offset-2"
                        to="/auth/login"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
