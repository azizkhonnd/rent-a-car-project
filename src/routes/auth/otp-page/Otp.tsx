import React, { useState } from "react";
import { Row, Col, Input, Typography } from "antd";

const { Title } = Typography;

const OTPInput: React.FC<{ formatter: (str: string) => string }> = ({ formatter }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    const formattedValue = formatter(value);

    if (/^\d*$/.test(formattedValue)) {
      const newOtp = [...otp];
      newOtp[index] = formattedValue;
      setOtp(newOtp);

      if (formattedValue && index < 5) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <Row className="authShadow p-2 pt-[70px]" justify="center" gutter={10} style={{ marginBottom: "20px", width: '32%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '210px auto', height: '220px', borderRadius: '8px', padding: '20px' }}>
      <Title level={5}>Please enter the 6-digit code received in your email</Title>
      <Row gutter={10} justify="center" style={{ marginTop: '20px' }}>
        {otp.map((value, index) => (
          <Col key={index} span={3}>
            <Input
              id={`otp-input-${index}`}
              value={value}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              style={{
                width: "80%",
                height: "50px",
                textAlign: "center",
                fontSize: "20px",
              }}
            />
          </Col>
        ))}
      </Row>
    </Row>
  );
};

const App: React.FC = () => {
  const sharedProps = {
    formatter: (str: string) => str.toUpperCase(),
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <OTPInput {...sharedProps} />
    </div>
  );
};

export default App;
