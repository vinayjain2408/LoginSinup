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





// import React from 'react';
// import {
//   Button,
//   Cascader, Form,
//   Input, Radio, Select,
// } from 'antd';
// const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 6,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 24,
//     },
//     sm: {
//       span: 14,
//     },
//   },
// };

// function App() {
//   const [form] = Form.useForm();
//   const handleSubmit = ()=>{

//   }
  
//   return (
//     <>
//       <Form
//         form={form}
//         {...formItemLayout}
//         variant="filled"
//         style={{
//           maxWidth: 600,
//         }}
//         onFinish={handleSubmit}
//       >
//         <Form.Item
//           label="Enter name"
//           name="Name"
//           rules={[
//             {
//               required: true,
//               message: 'Name is required',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Enter email"
//           name="Email"
//           rules={[
//             {
//               required: true,
//               message: 'Email is required',
//             },
//           ]}
//         >
//           <Input
//             style={{
//               width: '100%',
//             }}
//           />
//         </Form.Item>

//         <Form.Item
//           label="Phone Number"
//           name="phonenumber"
//           rules={[
//             {
//               required: true,
//               message: 'Required mobile number',
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item label="Gender" name="Gender"
//           rules={[
//             { required: true,
//               message: 'Gender is required',
//             },]}>
//           <Radio.Group>
//             <Radio value="Male"> Male </Radio>
//             <Radio value="Female"> Female </Radio>
//           </Radio.Group>
//         </Form.Item>

//         <Form.Item
//           label="Select Hobies"
//           name="Hobies"
//           rules={[
//             { required: true,
//               message: 'Hobies is required',
//             },]}
//         > <Select mode="multiple"/>
//         </Form.Item>

//         <Form.Item
//           label="Select Country"
//           name="Select"
//           rules={[
//             {
//               required: true,
//               message: 'Country is required',
//             },
//           ]}
//         >
//           <Select />
//         </Form.Item>
//         <Form.Item
//           label="Select State"
//           name="State"
//           rules={[
//             {
//               required: true,
//               message: 'State is required',
//             },
//           ]}
//         >
//           <Select placeholder="Enter state"
//            options={[
//             { value: 'Bihar', label: <span>Bihar</span> },
//             { value: 'Rajasthan', label: <span>Rajasthan</span> },
//             { value: 'Goa', label: <span>Goa</span> },
//             { value: 'Assam', label: <span>Assam</span> },
//             { value: 'Punjab', label: <span>Punjab</span> }
//         ]}/>
//         </Form.Item>
//         <Form.Item
//           label="Select City"
//           name="Select"
//           rules={[
//             {
//               required: true,
//               message: 'City is required',
//             },
//           ]}
//         >
//           <Select />
//         </Form.Item>

//         <Form.Item
//           name="password"
//           label="Password"
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password!',
//             },
//           ]}
//           hasFeedback
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item
//           name="confirm"
//           label="Confirm Password"
//           dependencies={['password']}
//           hasFeedback
//           rules={[
//             {
//               required: true,
//               message: 'Please confirm your password!',
//             },
//             ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue('password') === value) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject(new Error('The new password that you entered do not match!'));
//               },
//             }),
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item
//           wrapperCol={{
//             offset: 6,
//             span: 16,
//           }}
//         >
//           <Button type="" htmlType="submit">
//             Reset
//           </Button>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </>
//   )
// }

// export default App
