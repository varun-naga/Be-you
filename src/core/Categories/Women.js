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
            Kurtas & Suits
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Sarees
          </a>
        ),
        icon: <SmileOutlined />,
        
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Ethnic wear
          </a>
        ),
        
      },
      {
        key:'4',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              Jackets
            </a>
          ),
          
      },
    ]}
  />
);

const Women= () => (
  <Dropdown overlay={Data}>
    <a onClick={e => e.preventDefault()}>
      <Space style={{color:'white',fontSize:"15px",marginTop:"10px",marginLeft:"20px"}}>
        WOMAN
        
      </Space>
    </a>
  </Dropdown>
);

export default Women;