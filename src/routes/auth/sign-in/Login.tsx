/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";
import { Typography, Button, Form, Input, message } from "antd";
import { useSignInMutation } from "../../../redux/api/auth-api";
import { useNavigate, Link } from "react-router-dom";
import type { SignInRequest } from "../../../redux/api/auth-api";

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [signIn, { data, isLoading, isSuccess, isError, error }] = useSignInMutation();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.payload));
      message.success("Login successful!");
      navigate("/dashboard");
    }

    if (isError && error) {
      if ("data" in error) {
        message.error((error.data as any).message || "Login failed!");
      } else {
        message.error("An unexpected error occurred!");
      }
    }
  }, [isSuccess, isError, data, error, navigate]);

  const onFinish = (values: SignInRequest) => {
    signIn(values);
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r mt-[130px] to-blue-200">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <Title
          level={3}
          style={{
            textAlign: "center",
            color: "#1E90FF",
            marginBottom: "24px",
          }}
        >
          Login
        </Title>
        <Form
          form={form}
          name="login_form"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
              { min: 6, message: "Password must be at least 6 characters long!" },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            style={{ width: "100%", marginTop: "10px" }}
          >
            Login
          </Button>
        </Form>

        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <Text>
            Don't have an account?{" "}
            <Link to='/auth/sign-up'>
              sign-up
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
