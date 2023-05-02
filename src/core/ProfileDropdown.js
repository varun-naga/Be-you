import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { deepOrange, deepPurple } from '@mui/material/colors';
// import './index.css';
import { SmileOutlined } from '@ant-design/icons';
import { Dropdown} from 'antd';
import { Avatar, Link } from '@mui/material';
import { isAuthenticated,signout } from '../auth/helper';

const items=[
      {
        key: '1',
        label: (
            <Link variant="body1" href="/user/profile" underline="none">Profile</Link>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Wishlist
          </a>
        ),
        icon: <SmileOutlined />,
      },
      {
        key: '3',
        label: (
          <Link variant="body1" color="error"  href="/user/orders"  underline="none" >Orders</Link>
        ),
        
      },
      {
        key: '4',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Contact Us
          </a>
        ),
      },{
        key:'5',
        danger: true,
        label:(
          isAuthenticated().user?(
          <Link variant="body1" color="error"  href="/" onClick={()=>{signout()}} underline="none" >Signout</Link>
         ):null
         ),
      },
    ]

function ProfileDropdown ({isAuthenticated}) {
  return(
  
  <Dropdown menu={{items,selectable: true}} size={{ width: 240 }}>
    
    <Avatar sx={{ bgcolor: deepPurple[500] }} style={{marginLeft:"1670px",marginTop:"-75px"}} onClick={e=>e.preventDefault()}>{isAuthenticated().user.name[0]}</Avatar>
    
  </Dropdown>)
};

export default ProfileDropdown;