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
        setUserInfo({
            ...userInfo,
            name: values.name,
            password: values.password,
        });

        dispatch(updateUserInfo({ first_name: values.name, password: values.password }));
        message.success('User info updated successfully!');
    };

    const handlePhotoUpload = (info: { file: { originFileObj?: Blob | MediaSource; }; }) => {
        const file = info.file.originFileObj;

        if (file) {
            console.log("File Object:", file);
            const photoUrl = URL.createObjectURL(file);

            setUserInfo({
                ...userInfo,
                photo: photoUrl,
            });

            dispatch(updateUserInfo({ avatar: photoUrl }));
            message.success('Photo uploaded successfully!');
        } else {
            message.error('Failed to upload the photo.');
        }
    };

    return (
        <>
            <Header />
            <div className="container authShadow" style={{ maxWidth: '400px', margin: '70px auto', paddingTop: '20px', borderRadius: '6px', paddingRight: '70px' }}>
                <Form
                    layout="vertical"
                    initialValues={userInfo}
                    onFinish={handleFormSubmit}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', paddingLeft: '40px' }} className='mb-4'>
                        <Form.Item >
                            <div className='flex flex-col mb-2 items-center' >
                                <Upload
                                    name="avatar"
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

                            </div>
                            <Button icon={<UploadOutlined />}>Change Photo</Button>
                        </Form.Item>
                    </div>

                    <Form.Item
                        label="User Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name!' }]}
                        style={{ width: '130%' }}
                    >
                        <Input placeholder="Enter your name" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                        style={{ width: '130%' }}
                    >
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '130%' }}>
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
