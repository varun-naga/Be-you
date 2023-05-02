import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const Data = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          // <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          //   T-Shirts
          // </a>
          <Link />
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Casual Shirts
          </a>
        ),
        icon: <SmileOutlined />,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Formal Shirts
          </a>
        ),
        
      },
      {
        key: '4',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Formal Shirts
          </a>
        ),
      },
    ]}
  />
);

const Men= () => (
  <Dropdown overlay={Data}>
    <a onClick={e => e.preventDefault()}>
      <Space style={{color:'white',fontSize:"15px",marginTop:"10px",marginLeft:"20px"}}>
        MEN
      </Space> 
      
    </a>
  </Dropdown>
);

export default Men;