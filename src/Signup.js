import React, { useState ,useEffect } from 'react';
import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  message,
} from 'antd';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

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

const { Option } = Select;


function Signup() {
    const [form] = Form.useForm();
  
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
  
    const [countrySelectValue, setCountrySelectValue] = useState("");
    const [stateSelectValue, setStateSelectValue] = useState("");
    const [citySelectValue, setCitySelectValue] = useState("");
  
    useEffect(() => {
      getCountries();
    }, []);
  
    useEffect(() => {
      if (countrySelectValue) getStatesByCountry();
    }, [countrySelectValue]);
  
    useEffect(() => {
      if (stateSelectValue) getCitiesByStates();
    }, [stateSelectValue]);
  
    const getCountries = () => {
      axios.get("https://api.countrystatecity.in/v1/countries", {
        headers: {
          "X-CSCAPI-KEY": "TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="
        }
      })
        .then(response => {
          setCountries(response.data);
        })
        .catch(error => {
          console.error("Error fetching countries:", error);
        });
    };
  
    const getStatesByCountry = () => {
      axios.get(`https://api.countrystatecity.in/v1/countries/${countrySelectValue}/states`, {
        headers: {
          "X-CSCAPI-KEY": "TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="
        }
      })
        .then(response => {
          setStates(response.data);
        })
        .catch(error => {
          console.error("Error fetching states:", error);
        });
    };
  
    const getCitiesByStates = () => {
      axios.get(`https://api.countrystatecity.in/v1/countries/${countrySelectValue}/states/${stateSelectValue}/cities`, {
        headers: {
          "X-CSCAPI-KEY": "TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="
        }
      })
        .then(response => {
          setCities(response.data);
        })
        .catch(error => {
          console.error("Error fetching cities:", error);
        });
    };
  
    const handleSubmit = (values) => {
      console.log('Form values:', values);
      message.success('SignUp successful');
      form.resetFields();
    };
  
    const handleReset = () => {
      form.resetFields();
    };

    const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  
    return (
      <>
      <h3>SignUp Page</h3>
        <Form
          form={form}
          {...formItemLayout}
          variant="filled"
          style={{
            maxWidth: 600,
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Enter name"
            name="Name"
            rules={[
              {
                required: true,
                message: 'Name is required',
              },
            ]}
          >
            <Input />
          </Form.Item>
  
          <Form.Item
            label="Enter email"
            name="Email"
            rules={[
              {
                required: true,
                message: 'Email is required',
              },
            ]}
          >
            <Input style={{ width: '100%' }} />
          </Form.Item>
  
          <Form.Item
            label="Phone Number"
            name="phonenumber"
            rules={[
              {
                required: true,
                message: 'Required mobile number',
              },
            ]}
          >
            <Input maxLength={10} />
          </Form.Item>
  
          <Form.Item
            label="Gender"
            name="Gender"
            rules={[
              {
                required: true,
                message: 'Gender is required',
              },
            ]}
          >
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </Form.Item>
  
          <Form.Item
            label="Select Hobies"
            name="Hobies"
            rules={[
              {
                required: true,
                message: 'Hobies is required',
              },
            ]}
          >
            <Select mode="multiple">
              <Option value="Reading">Reading</Option>
              <Option value="Swimming">Swimming</Option>
              <Option value="Music">Music</Option>
              <Option value="Sports">Sports</Option>
            </Select>
          </Form.Item>
  
          <Form.Item
            label="Select Country"
            name="Country"
            rules={[
              {
                required: true,
                message: 'Country is required',
              },
            ]}
          >
            <Select
            showSearch
              value={countrySelectValue}
              onChange={(value) => {
                setCountrySelectValue(value);
                setStateSelectValue("");
                setCitySelectValue(""); 
              }}
              filterOption={filterOption}
            >
              {countries.map(country => (
                <Option key={country.iso2} value={country.iso2}>
                  {country.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
  
          <Form.Item
            label="Select State"
            name="State"
            rules={[
              {
                required: true,
                message: 'State is required',
              },
            ]}
          >
            <Select
              value={stateSelectValue}
              onChange={(value) => setStateSelectValue(value)}
            >
              {states.map(state => (
                <Option key={state.id} value={state.iso2}>
                  {state.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
  
          <Form.Item
            label="Select City"
            name="City"
            rules={[
              {
                required: true,
                message: 'City is required',
              },
            ]}
          >
            <Select
              value={citySelectValue}
              onChange={(value) => setCitySelectValue(value)}
            >
              {cities.map(city => (
                <Option key={city.id} value={city.iso2}>
                  {city.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
  
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
  
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The passwords that you entered do not match!')
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
  
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="default" htmlType="reset" onClick={handleReset}>
              Reset
            </Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
  
  export default Signup;
  
// function Signup() {
//   const [form] = Form.useForm();

//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);

//   const [countrySelectValue, setCountrySelectValue] = useState("");
//   const [stateSelectValue, setStateSelectValue] = useState("");
//   const [citySelectValue, setCitySelectValue] = useState("");

//   const config = {
//     method: "get",
//     url: "https://api.countrystatecity.in/v1/countries",
//     headers: {
//       "X-CSCAPI-KEY": "TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="
//     }
//   };

//   function getCountries() {
//     axios(config)
//       .then(function (response) {
//         // console.log(response.data);
//         setCountries(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   function getStatesByCountry() {
//     const config = {
//       method: "get",
//       url:
//         "https://api.countrystatecity.in/v1/countries/" +
//         countrySelectValue +
//         "/states",
//       headers: {
//         "X-CSCAPI-KEY":
//         "TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="
//       }
//     };

//     axios(config)
//       .then(function (response) {
//         console.log(response.data);
//         setStates(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }


//   function getCitiesByStates() {
//     const config = {
//         method: "get",
//         url: `https://api.countrystatecity.in/v1/countries/${countrySelectValue}/states/${stateSelectValue}/cities`,
//         headers: {
//           "X-CSCAPI-KEY": "TjZNU1M4VDR1UUlVeVNDdFlXMVdBWFIzUGs0Q016eXhPY0F0cUZydA=="
//         }
//       };
      

//     axios(config)
//       .then(function (response) {
//         console.log(response.data);
//         setCities(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   useEffect(() => {
//     getCountries();
//   }, []);

//   useEffect(() => {
//     if (countrySelectValue.length > 0) getStatesByCountry();
//   }, [countrySelectValue]);


//   useEffect(() => {
//   if (stateSelectValue.length > 0) getCitiesByStates();
// }, [stateSelectValue]);


//   const handleSubmit = (values) => {
//     console.log('Form values:', values);
    
//     const formData = JSON.stringify(values);
  
//     // Store the form data in localStorage with a key, e.g., "formData"
//     localStorage.setItem("formData", formData);
//     message.success('SignUp successful');
//     form.resetFields()
//   };

//   const handleReset = ()=>{
//     form.resetFields();
//   }

//   return (
//     <>
//     <Form
//       form={form}
//       {...formItemLayout}
//       variant="filled"
//       style={{
//         maxWidth: 600,
//       }}
//       onFinish={handleSubmit}
//     >
//       <Form.Item
//         label="Enter name"
//         name="Name"
//         rules={[
//           {
//             required: true,
//             message: 'Name is required',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Enter email"
//         name="Email"
//         rules={[
//           {
//             required: true,
//             message: 'Email is required',
//           },
//         ]}
//       >
//         <Input style={{ width: '100%' }} />
//       </Form.Item>

//       <Form.Item
//         label="Phone Number"
//         name="phonenumber"
//         rules={[
//           {
//             required: true,
//             message: 'Required mobile number',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Gender"
//         name="Gender"
//         rules={[
//           {
//             required: true,
//             message: 'Gender is required',
//           },
//         ]}
//       >
//         <Radio.Group>
//           <Radio value="Male">Male</Radio>
//           <Radio value="Female">Female</Radio>
//         </Radio.Group>
//       </Form.Item>

//       <Form.Item
//         label="Select Hobies"
//         name="Hobies"
//         rules={[
//           {
//             required: true,
//             message: 'Hobies is required',
//           },
//         ]}
//       >
//         <Select mode="multiple">
//           <Option value="Reading">Reading</Option>
//           <Option value="Swimming">Swimming</Option>
//           <Option value="Music">Music</Option>
//           <Option value="Sports">Sports</Option>
//         </Select>
//       </Form.Item>

//       <Form.Item
//         label="Select Country"
//         name="Country"
//         rules={[
//           {
//             required: true,
//             message: 'Country is required',
//           },
//         ]}
//       >
//         <Select 
//          onChange={(e) => setCountrySelectValue(e.target.value)}
//          value={countrySelectValue}>
//             <Option>
//             {countries.map((country) => {
//           return (
//             <option key={country.iso2} value={country.iso2}>
//               {country.name}
//             </option>
//           );
//         })}
//             </Option>
//         </Select>
//       </Form.Item>

//       <Form.Item
//         label="Select State"
//         name="State"
//         rules={[
//           {
//             required: true,
//             message: 'State is required',
//           },
//         ]}
//       >
//         <Select value={stateSelectValue}
//         onChange={(e) => setStateSelectValue(e.target.value)}>
//           <Option>
//           {states.map((state) => {
//           return (
//             <option key={state.id} value={state.iso2}>
//               {state.name}
//             </option>
//           );
//         })}
//           </Option>
//         </Select>
//       </Form.Item>

//       <Form.Item
//         label="Select City"
//         name="City"
//         rules={[
//           {
//             required: true,
//             message: 'City is required',
//           },
//         ]}
//       >
//         <Select value={citySelectValue}
//         onChange={(e) => setCitySelectValue(e.target.value)}>
//           <Option>
//           {cities.map((cities) => {
//           return (
//             <option key={cities.id} value={cities.iso2}>
//               {cities.name}
//             </option>
//           );
//         })}
//           </Option>
//         </Select>
//       </Form.Item>

//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//         hasFeedback
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="confirm"
//         label="Confirm Password"
//         dependencies={['password']}
//         hasFeedback
//         rules={[
//           {
//             required: true,
//             message: 'Please confirm your password!',
//           },
//           ({ getFieldValue }) => ({
//             validator(_, value) {
//               if (!value || getFieldValue('password') === value) {
//                 return Promise.resolve();
//               }
//               return Promise.reject(
//                 new Error('The passwords that you entered do not match!')
//               );
//             },
//           }),
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
//         <Button type="default" htmlType="reset" onClick={handleReset}>
//           Reset
//         </Button>
//         <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }}>
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//     </>
    
//   );
// }

// export default Signup;
