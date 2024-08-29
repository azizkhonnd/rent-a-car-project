import { Form, Input, Upload } from 'antd';
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";


const UserInfo = () => {
    const userInfo = {
        name: 'John Doe',
        password: 'password123',
        photo: 'https://via.placeholder.com/150',
    };

    return (
        <>
          <Outlet />
            <Header />
            <div className="container authShadow" style={{ maxWidth: '470px', margin: '80px auto', paddingTop: '20px', borderRadius: '6px', paddingRight: '40px' }}>
                <Form
                    layout="vertical"
                    initialValues={{
                        name: userInfo.name,
                        password: userInfo.password,
                    }}
                >
                    <Form.Item label="User Photo">
                        <Upload
                            name="photo"
                            listType="picture-card"
                            showUploadList={false}
                            beforeUpload={() => false}
                            disabled
                        >
                            <img
                                src={userInfo.photo}
                                alt="user"
                                style={{ width: '150px', height: '100px', borderRadius: '50%' }}
                            />
                        </Upload>
                    </Form.Item>

                    <Form.Item
                        label="User Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name!' }]}
                    >
                        <Input style={{ width: '120%' }} placeholder="Enter your name" disabled />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password style={{ width: '120%' }} placeholder="Enter your password" disabled />
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default UserInfo;
