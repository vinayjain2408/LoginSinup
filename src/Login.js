import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      // Retrieve the stored form data from localStorage
      const storedData = localStorage.getItem("formData");

      if (storedData) {
        const formData = JSON.parse(storedData);
        // Compare the entered email and password with stored data
        if (formData.Email === values.email && formData.password === values.password) {
          // Authentication successful
          message.success('Login successful');
          // Redirect to dashboard or perform any other action
        } else {
          // Authentication failed
          message.error('Invalid email or password');
        }
      } else {
        // No stored data found
        message.error('No user registered');
      }
      setLoading(false);
    });
  };

  return (
    <Form form={form} onFinish={handleLogin}>
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
  );
};

export default Login;
