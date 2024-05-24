import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };

  
const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      const storedData = localStorage.getItem("formData");

      if (storedData) {
        const formData = JSON.parse(storedData);
        if (formData.Email === values.email && formData.password === values.password) {
          message.success('Login successful');
        } else {
          message.error('Invalid email or password');
        }
      } else {
        message.error('No user registered');
      }
      setLoading(false);
      form.resetFields()
    });
  };

  return (
    <>
    <h3>Login Page</h3>
    <Form form={form} {...formItemLayout} onFinish={handleLogin}>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please enter your email',
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your password',
          },
        ]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default Login;
