import React , { Component } from "react"
import { Form, Input, Button, CheckBox } from 'antd'


export default class Login extends Component {

    render () {
        const layout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 5 }
        }

        const taiLayout = {
            wrapperCol: { offest: 4, span: 5}
        }



        return (
            <Form 
                {...layout}
                name='login'
                initialValues = { {remeber:true} }
            >
                <Form.Item
                    label="UserName"
                    name="username"
                    rules= { [ { require : true, message: "请输入用户名" } ] }
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules= { [ { require : true, message: "请输入密码" } ] }
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    {...taiLayout}
                >
                    <Button type='primary' htmlType="submit">
                        登入
                    </Button>
                </Form.Item>


            </Form>
        )
    }
}