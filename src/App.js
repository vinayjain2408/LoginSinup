import React from 'react';
import Login from './Login';
import { Tabs } from 'antd';
import Signup from './Signup';

function App() {
 
  const tabItem = [
    {
      key: 1,
      label: `SignUp`,
      children: <Signup />,
    },
    {
      key: 2,
      label: `Login`,
      children: <Login />,
    },
  ]

  const handleChange = ()=>{
    console.log("changed")
  }

  return (
    <>
     <Tabs
    defaultActiveKey="1"
    items={tabItem}
    onChange={handleChange}
  />
    </>
    
  );
}

export default App;
