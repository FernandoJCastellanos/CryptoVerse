import React, {useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi"
import { useGetCryptosQuery } from "../services/cryptoApi";




const { Text, Title } = Typography;
const { Option } = Select;


type CryptoNewsProps={

  simplified?: boolean;

}


const News = ({simplified}: CryptoNewsProps) => {

  const [newsCategory, setNewsCategory] = useState("Cryptocurrency")

  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory, count: simplified ? 6 : 12});
  const { data} = useGetCryptosQuery(100);



  const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";


  if(!cryptoNews?.value) return (
    <div>
      "Loading..."
    </div>
    )
  



  return (

      <Row gutter={[24, 24]}>


        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp='children' 
              onChange={(value) => setNewsCategory(value)}
              filterOption= {(input: any, option: any) => option?.children?.toLowerCase().indexOf(input.toLowerCase()) > 0}
            >

            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin: any) => <Option value={coin.name}>{coin.name}</Option>)}

            </Select>
          </Col>
        )}



        {cryptoNews.value.map((news: any, i: any) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>
                    {news.name}
                  </Title>
                  <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                </div>
                <p>
                  {news.description > 100 ? `${news.description.substring(0,100)}...`
                    : news.description 
                  }
                </p>
              </a>
              <div className='provider-container'>
                  <div>
                    <Avatar src= {news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    <Text className='provider-name'  >{news.provider[0]?.name}</Text>
                  </div>
                    <Text>{moment(news.datePublished).startOf("second").fromNow()}</Text>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

  )
}

export default News