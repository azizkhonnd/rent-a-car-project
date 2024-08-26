/* eslint-disable @typescript-eslint/no-unused-vars */


import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const OtpVerified = (otp?: string, userId?: string) => {
    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate("/dashboard");
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1>Your Email has been Verified!</h1>
                <p>Thank you for verifying your email. You can now proceed to your dashboard.</p>
                <Button type="primary" onClick={goToDashboard}>
                    Go to Dashboard
                </Button>
            </div>
        </div>
    );
};

export default OtpVerified;
