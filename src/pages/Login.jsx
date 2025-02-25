import { Button, Checkbox, Form, Input } from 'antd';
import useLogin from '../components/useLogin';
// import logo from '../assets/Group.png'
import pablo from '../assets/pablo-sign-in 1.png'
const Login = () => {

  const { onLogin, loading } = useLogin()

  return (
    <div>
      <div className='lg:flex flex-row lg:justify-center lg:items-center w-screen h-screen'>
        <div className='lg:w-[50%] w-[100%] bg-[#FDFDFD]'>
          <div className='lg:pl-20 lg:pb-10 lg:block hidden'>
            <img src={pablo} alt="pablo" />
          </div>
        </div>

        <div className='lg:w-[50%] lg:block md:hidden hidden'>
          <div className='pl-32'>
            <h2 className='font-bold text-[#213F7D] text-[30px]'>Welcome!</h2>
            <p className='font-normal mt-4 text-sm text-[#545F7D]'>Enter details to login.</p>
            <Form
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: false,
              }}
              layout='vertical'
              onFinish={onLogin}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                {loading && <Button className=' bg-[#39CDCC] text-white text-base font-semibold w-full' size='large' loading={loading} htmlType="submit">
                  LOGGING IN
                </Button>}
                {!loading && <Button className=' bg-[#39CDCC] text-white text-base font-semibold w-full' type='primary' size='large' loading={loading} htmlType="submit">
                  LOG IN
                </Button>}
              </Form.Item>
            </Form>
          </div>
        </div>

        
        <div className="lg:w-[50%] lg:hidden bg-slate-600 h-svh flex justify-center items-center" >
          <div className=' shadow-2xl md:p-20 p-10 rounded-3xl bg-[#545F7D]'>
            <h2 className='font-bold mb-5 text-[#213F7D] lg:text-[30px] text-4xl'>Welcome!</h2>
            <p className='font-normal mb-5 mt-4 lg:text-sm text-xl text-white'>Enter details to login.</p>
            <Form
              labelCol={{
                span: 12,
              }}
              wrapperCol={{
                span: 24,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: false,
              }}
              layout='vertical'
              onFinish={onLogin}
              autoComplete="off"
            >
              <Form.Item
                label={<span className="text-xl text-white">Username</span>}
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label={<span className='text-xl text-white'>Password</span>}
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
              >
                <Checkbox className=' text-xl text-white'>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button className=' bg-[#39CDCC] text-xl font-semibold w-full' size='large' type="primary" loading={loading} htmlType="submit">
                  LOG IN
                </Button>
              </Form.Item>
            </Form>



          </div>
        </div>
      </div >
    </div >
  );
}
export default Login;