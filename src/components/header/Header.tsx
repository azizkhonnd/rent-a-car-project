import { useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import './header.css'
import { AutoComplete, Input, Layout, Menu } from 'antd';
import siteLogo from './site-logo.svg'
import type { MenuProps } from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className='headerContainer'>
            <Layout >
                {!isHomePage && (
                    <Sider className="relative z-40" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                        <div className="demo-logo-vertical" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                    </Sider>
                )}
                <Layout >
                    <div className="container headerContainerItems flex justify-between">
                        <div className="siteLogo inputItemHeader">
                            <Link to='/'>
                                <img src={siteLogo} alt="site logo" width={148} height={44} />
                            </Link>
                            <AutoComplete
                                popupMatchSelectWidth={252}
                                style={{ width: 492, borderRadius: '50%' }}
                                size="large"
                                options={[
                                    { label: 'Apple', value: 'apple' },
                                    { label: 'Banana', value: 'banana' },
                                    { label: 'Cherry', value: 'cherry' },
                                ]}
                                notFoundContent={<p>Car not found</p>}
                            >
                                <Input.Search size="large" placeholder="Search something here" enterButton />
                            </AutoComplete>
                        </div>
                        <div className="header__btns ">
                            <Link to='/liked-cars'>
                                <button className="header__btn"><AiFillHeart size={26} /></button>
                            </Link>
                            <button className="header__btn"><IoIosNotifications size={26} /></button>
                            <button className="header__btn"><IoIosSettings size={26} /></button>
                            <button className="header__btn"><BiUserCircle size={26} /></button>
                        </div>
                    </div>
                </Layout>
            </Layout>
        </div>
    );
};

export default Header;
