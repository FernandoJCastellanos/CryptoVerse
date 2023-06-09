import React, {useState} from 'react'
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import { millify } from "millify";
import { Col, Row, Typography, Select } from "antd";
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import {useGetCryptoDetailsQuery} from "../services/cryptoApi";



const {Title, Text} = Typography;
const {Option} = Select;





const CryptoDetails = () => {

  const {uuid} = useParams();
  console.log(uuid);
  const [timePeriod, settimePeriod] = useState("7d")

  const {data, isFetching} = useGetCryptoDetailsQuery(uuid);

  console.log(data);

  return (
    <div>
      CryptoDetails 
    </div>
  )
}

export default CryptoDetails