import React, { useEffect, useState } from 'react';
import { Flex, Input, Typography, Button, Spin } from 'antd';
import { useVerifyOtpMutation, useResendOtpMutation } from '../../../redux/api/auth-api';
import { useSearchParams } from 'react-router-dom';

type OTPProps = React.ComponentProps<typeof Input.OTP>;

interface OtpProps {
  email: string;
}

const Otp: React.FC<OtpProps> = () => {
  const [resentCount, setResetCount] = useState(0);
  const [timer, setTimer] = useState(60);
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState('');
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [verifyOtp, { isLoading, isError, isSuccess }] = useVerifyOtpMutation();
  const [resendOtp] = useResendOtpMutation();

  const onChange: OTPProps['onChange'] = (e) => {
    console.log(e);
    setOtp(e);
  };

  useEffect(() => {
    if (searchParams.get("email")) {
      setEmail(atob(searchParams.get("email")!));
    }
    setIsPageLoading(false);
  }, [searchParams]);

  const handleSubmit = async () => {
    try {
      const response = await verifyOtp({ email, otp });
      if (response) {
        console.log('OTP Verified:', response);
      }
    } catch (error) {
      console.error('Verification failed:', error);
    }
  };

  const sharedProps: OTPProps = {
    value: otp,
    onChange,
  };

  const handleResend = async () => {
    resendOtp({ email });
    setResetCount(resentCount + 1);
    setTimer(60);
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [timer, resentCount]);

  const maskedEmail = email.replace(/(.{1})(.*)(.{2})(?=@)/,
    (_, first, middle, last) => first + '*'.repeat(middle.length) + last
  );

  console.log(resentCount);

  if (isPageLoading) {
    return (
      <div className='w-full mt-40 flex items-center justify-center'>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className='authShadow bg-white rounded-md w-full mt-[120px] flex items-center justify-center flex-col'>
      <div className='w-[400px] min-h-[250px]  rounded-lg p-7 flex items-center justify-center'>
        <Flex gap="middle" align="flex-start" vertical>
          <div className='flex items-center w-full justify-between flex-col'>
            <Typography className='text-center text-[24px] text-[#000] font-semibold mb-5'>OTP Verification</Typography>
            <div className='flex w-full justify-between items-center'>
              <Typography className='text-center text-[14px] text-[gray]'>We sent an OTP to</Typography>
              <Typography className='text-center text-[16px] text-[#000] font-semibold'> {maskedEmail}</Typography>
            </div>
          </div>
          <div className='w-full text-center'>
            <Input.OTP className='w-full text-center' formatter={(str) => str.toUpperCase()} {...sharedProps} />
          </div>
          <Button
            type="primary"
            className='w-full'
            loading={isLoading}
            onClick={handleSubmit}
            disabled={!otp || isLoading}
          >
            Verify
          </Button>
          <div className='flex w-full justify-between items-center'>
            {timer ? "Resend " + "to " + "email" + " after " + timer + "s" : ""}
            <Button
              type="primary"
              className='w-[98px]'
              loading={isLoading}
              htmlType='button'
              onClick={handleResend}
              disabled={timer > 0}
            >
              Resend OTP
            </Button>
          </div>
          {isError && <Typography className='text-red-500 text-center'>OTP verification failed.</Typography>}
          {isSuccess && <Typography className='text-green-500 text-center'>OTP verified successfully!</Typography>}
        </Flex>
      </div>
    </div>
  );
};

export default Otp;
