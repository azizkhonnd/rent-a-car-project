/* eslint-disable @typescript-eslint/no-unused-vars */
import { Typography, Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import { useSignInMutation } from "../../../redux/api/auth-api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type FieldType = {
  email: string;
  name: string;
};

const Login = () => {
  const [login, { data, isSuccess }] = useSignInMutation();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    login(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(`/dashboard`);
    }
  }, [isSuccess, navigate]);

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full flex items-center justify-center bg-gradient-to-r mt-28">
      <div className="w-[450px] min-h-[430px] bg-white rounded-lg shadow-lg p-8">
        <Typography
          style={{
            fontSize: "30px",
            textAlign: "center",
            fontWeight: "500",
            color: "#1E90FF",
            marginBottom: "20px",
            letterSpacing: "0.5px",
          }}
        >
          Login
        </Typography>
        <Form
          name="login"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ width: "100%" }}
        >
          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
            style={{ marginBottom: "16px" }}
          >
            <Input
              style={{
                height: "34px",
                borderRadius: "5px",
                borderColor: "#d9d9d9",
              }}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
            style={{ marginBottom: "24px" }}
          >
            <Input
              style={{
                height: "34px",
                borderRadius: "5px",
                borderColor: "#d9d9d9",
              }}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={false}
              style={{
                backgroundColor: "#1E90FF",
                color: "#fff",
                width: "100%",
                height: "34px",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: "500",
                marginTop: "25px",
                marginBottom: "10px",
              }}
            >
              Login
            </Button>
          <div>
            <Typography.Text>
              Don't have an account?{" "}
              <Typography.Link
                onClick={() => navigate("/auth/sign-up")}
                style={{ color: "#1E90FF", cursor: "pointer",}}
              >
                Sign Up
              </Typography.Link>
            </Typography.Text>
          </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
