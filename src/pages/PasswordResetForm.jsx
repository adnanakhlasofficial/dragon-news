import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PasswordResetForm = () => {
    const { passwordReset } = useContext(AuthContext)

    const handleReset = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get("email");
        passwordReset(email)
        .then(()=> {
            alert("Password reset email sent!")
        })
    }
    
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-center text-2xl font-bold">
                    Reset Your Password
                </h2>
                <form onSubmit={handleReset} className="card-body p-0">
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
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral !rounded-md">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordResetForm;