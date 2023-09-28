// Environment
import React from 'react';
import AppContextProvider from "./AppContext";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// CSS
import "./styles/App.scss";


// Components
import {NavBar, HomePage, CryptoCurrencies, News, CryptoDetails} from "./components";
import {Layout, Typography, Space} from "antd";


// Redux
import { Provider } from "react-redux";







function App() {



  return (
    <AppContextProvider>
          <div className='app'>
            <div className='navbar'>
              <NavBar />
            </div>
            <div className='main'>
              <Layout>
                <div className='routes'>
                  <Routes >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cryptocurrencies" element={<CryptoCurrencies simplified={false} />} />
                    <Route path="https://coinranking.com/" />
                    <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                    <Route path="/news" element={<News simplified={false} />} />
                  </Routes>
                </div>
              </Layout>
            
              <div className='footer' >
                <Typography.Title level={5} style={{color : "white" , textAlign: "center"}}>
                  Cryptoverse <br />
                  All rights reserved
                </Typography.Title>
                <Space >
                  <Link to="/"> Home </Link>
                  <Link to="/exchanges"> Exchanges </Link>
                  <Link to="/news"> News </Link>
                </Space>
              </div>
            </div>
          </div>
    </AppContextProvider>
  );
}

export default App;