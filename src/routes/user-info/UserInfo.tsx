import { Form, Input } from 'antd';
import Header from '../../components/header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store'; 

const UserInfo = () => {
    const userInfo = useSelector((state: RootState) => state.user);

    return (
        <>
            <Outlet />
            <Header />
            <div className="container authShadow" style={{ maxWidth: '400px', height: '400px', margin: '80px auto', paddingTop: '20px', borderRadius: '6px', paddingRight: '70px' }}>
                <Form layout="vertical">
                    <Form.Item className='flex justify-center'>
                        <div className='ml-[65px]'>
                            <img
                                src={userInfo.photo}
                                alt="user"
                                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
                            />
                        </div>
                    </Form.Item>

                    <Form.Item
                        label="User Name"
                        name="name"
                    >
                        <Input style={{ width: '130%' }} value={userInfo.name} disabled />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input.Password style={{ width: '130%' }} value={userInfo.password} disabled />
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default UserInfo;
