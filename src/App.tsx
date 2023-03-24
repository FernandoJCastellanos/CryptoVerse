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
import {NavBar, Exchanges, HomePage, CryptoCurrencies, News, CryptoDetails} from "./components";
import {Layout, Typography, Space} from "antd";

// Redux
import { Provider } from "react-redux";







function App() {



  return (
    <AppContextProvider>
      <Router>
          <div className='app'>
            <div className='navbar'>
              <NavBar />
            </div>
            <div className='main'>
              <Layout>
                <div className='routes'>
                  {/* <h1>hello</h1> */}
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
                    <Route path="/exchanges" element={<Exchanges />} />
                    <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                    <Route path="/news" element={<News />} />
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
      </Router>
    </AppContextProvider>
  );
}

export default App;