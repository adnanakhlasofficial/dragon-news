import { FaFacebook, FaInstagram, FaTwitter, } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-medium">Find Us On</h2>

            <div className="join w-full join-vertical mt-6">
                <button className="btn py-3 justify-start w-full bg-transparent join-item">
                    <FaFacebook size={25} /> Facebook
                </button>
                <button className="btn py-3 justify-start w-full bg-transparent join-item">
                    <FaTwitter size={25} /> Twitter
                </button>
                <button className="btn py-3 justify-start w-full bg-transparent join-item">
                    <FaInstagram size={25} /> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;
