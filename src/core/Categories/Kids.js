import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

const Data = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            T-Shirts
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
           Trousers
          </a>
        ),
        
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Jeans
          </a>
        ),
       
      },
      {
        key: '4',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Party Wear
            </a>
          ),
         
      },
    ]}
  />
);

const Kids= () => (
  <Dropdown overlay={Data}>
    <a onClick={e => e.preventDefault()}>
      <Space style={{color:'white',fontSize:"15px",marginTop:"15px",marginLeft:"20px"}}>
        KIDS
      </Space>
    </a>
  </Dropdown>
);

export default Kids;