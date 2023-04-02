// Environment
import React, {useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";

// CSS


// Components
import { Button, Menu, Typography, Avatar } from "antd";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";

// Images
import  icon  from "../images/cryptocurrency.png"






const NavBar = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState<any>(null)




    const location = useLocation();
    const [activeMenuItem, setActiveMenuItem] = useState('Home');
  
    useEffect(() => {
      const path = location.pathname;
      setActiveMenuItem(path === '/' ? 'Home' : path.slice(1));
    }, [location]);





    

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    

    useEffect(() => {
        if(screenSize < 768){
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);




  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/"> Cryptoverse </Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                <MenuOutlined />
            </Button>
        </div>

        {activeMenu && (

        <Menu theme="dark" selectedKeys={[activeMenuItem]}>
            <Menu.Item icon={<HomeOutlined />} key="Home">
                <Link to="/" >Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />} key="cryptocurrencies">
                <Link to="/cryptocurrencies">CryptoCurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />} key="Exchanges">
                <Link to="https://coinranking.com/" target="_blank">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />} key="news">
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>

        )}


    </div>
  );
}


// this gets exported to App
export default NavBar;
