import { Form, Input } from 'antd';
import Header from "../../components/header/Header";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Outlet } from 'react-router-dom';

const defaultAvatarUrl = 'https://via.placeholder.com/150/000000/FFFFFF/?text=No+Avatar';

const UserInfo = () => {
    const userInfo = useSelector((state: RootState) => state.userInfo);
    const avatarUrl = userInfo.avatar || defaultAvatarUrl;

    return (
        <>
            <Outlet />
            <Header />
            <div className="container authShadow" style={{ maxWidth: '400px', height: '400px', margin: '80px auto', paddingTop: '20px', borderRadius: '6px', paddingRight: '70px' }}>
                <Form
                    layout="vertical"
                    initialValues={{
                        name: userInfo.first_name,
                        password: userInfo.password,
                    }}
                >
                    <Form.Item className='flex justify-center'>
                        <div className='ml-[65px]'>
                            <img
                                src={avatarUrl}
                                alt="user"
                                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
                            />
                        </div>
                    </Form.Item>

                    <Form.Item
                        label="User Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name!' }]}
                    >
                        <Input style={{ width: '130%' }} placeholder="Enter your name" disabled />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                       
                    >
                        <Input.Password style={{ width: '130%' }} placeholder="Enter your password"  />
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default UserInfo;
