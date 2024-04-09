import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message, } from 'antd';
//import { authService } from '../authService';
//import './LoginPage.css'; 
//import { useDispatch } from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css';



const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //const dispatch = useDispatch();

useEffect(() => {
  Aos.init({duration: 2000});
}
,[])


  const onFinish = async (values) => {
    setLoading(true);
    try {
  //    await authService.login(values.email, values.password, dispatch);
      message.success('Login successful');
       
      navigate('/homepage');
    } catch (error) {
      message.error('Login failed');
    }
    setLoading(false);
  };

 


  return (<>
  
    <div  className="login-form-container" >
 
           <Form data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1000" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-mirror="true" 
            name="loginForm"
           initialValues={{ remember: true }}
           onFinish={onFinish}
           className="login-form" 
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"

          rules={[{ required: true, message: 'Please enter your password' }]}
          

        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
    </>
  );
};

export default LoginForm;