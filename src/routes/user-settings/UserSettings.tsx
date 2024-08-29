import { useState } from 'react';
import { Form, Input, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Header from "../../components/header/Header";
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../../redux/slices/user-slice';
import { Outlet } from 'react-router-dom';

const UserSettings = () => {
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({
        name: 'John Doe',
        password: 'password123',
        photo: 'https://via.placeholder.com/150',
    });

    const handleFormSubmit = (values: { name: string; password: string; }) => {
        dispatch(updateUserInfo({ first_name: values.name, password: values.password }));
        message.success('User info updated successfully!');
    };

    const handlePhotoUpload = (info: { file: { status: string; originFileObj: Blob | MediaSource; }; }) => {
        if (info.file.status === 'done') {
            const photoUrl = URL.createObjectURL(info.file.originFileObj);
            dispatch(updateUserInfo({ avatar: photoUrl }));
            message.success('Photo uploaded successfully!');
        }
    };

    return (
        <>
            <Header />
            <div className="container authShadow" style={{ maxWidth: '470px', margin: '80px auto', paddingTop: '20px', borderRadius: '6px', paddingRight: '40px' }}>
                <Form
                    layout="vertical"
                    initialValues={userInfo}
                    onFinish={handleFormSubmit}
                >
                    <Form.Item label="User Photo">
                        <Upload
                            name="photo"
                            listType="picture-card"
                            showUploadList={false}
                            beforeUpload={() => false}
                            onChange={handlePhotoUpload}
                        >
                            <img
                                src={userInfo.photo}
                                alt="user"
                                style={{ width: '150px', height: '100px', borderRadius: '50%' }}
                            />
                        </Upload>
                        <Button icon={<UploadOutlined />}>Change Photo</Button>
                    </Form.Item>

                    <Form.Item
                        label="User Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name!' }]}
                    >
                        <Input placeholder="Enter your name" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Update Info
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Outlet />
        </>
    );
};

export default UserSettings;
