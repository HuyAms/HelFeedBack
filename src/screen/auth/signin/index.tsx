import React from 'react'
import {connect} from 'react-redux'
import {Form, Icon, Input} from 'antd'
import {SignInForm, SignInContainer, LoginButton} from './style'
import {login} from '../../../modules/Auth'
import ModelState from '../../../models/bases/ModelState'
import Auth from '../../../models/Auth'
import ErrorText from '../../../components/ErrorText'
import { navigate, RouteComponentProps } from "@reach/router";
import { usePrevious } from "../../../utils/hooks";
import { setToken } from "../../../services/localStorage";

interface Props extends RouteComponentProps {
  auth: ModelState<Auth>
  login: (email: string, password: string) => void
  form: any
}

const SignIn: React.FunctionComponent<Props> = props => {
  const {form, auth, login} = props
  const {getFieldDecorator, getFieldsError} = form

  const prevAuthStatus = usePrevious(auth.status)
  React.useEffect(() => {
    if (prevAuthStatus === 'saving' && auth.status === 'success') {
      setToken(auth.data.token)
      navigate('/admin/home')
    }
  }, [auth.status])


  const renderPassword = () => {
    return getFieldDecorator('password', {
      rules: [
        {required: true, message: 'Password is required'},
        {min: 6, message: 'Invalid password'},
      ],
    })(
      <Input.Password
        prefix={<Icon type="lock" />}
        placeholder={'Password'}
      />,
    )
  }

  const renderEmail = () => {
    return getFieldDecorator('email', {
      rules: [
        {required: true, message: 'Email is required'},
        {type: 'email', message: 'Invalid email'},
      ],
    })(<Input prefix={<Icon type="mail" />} placeholder={'Email'} />)
  }

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, signInUser) => {
      if (!err) {
        login(signInUser.email, signInUser.password)
      }
    })
  }

  const hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }

  const renderError = () => {
    if (auth.status === 'error') {
      return <ErrorText>Unauthorized</ErrorText>
    }
  }

  return (
    <SignInContainer data-testid="signin-page">
      <h1>HelFeedback</h1>
      <SignInForm onSubmit={handleSubmit}>
        <Form.Item>{renderEmail()}</Form.Item>
        <Form.Item>{renderPassword()}</Form.Item>
        {renderError()}
        <Form.Item>
          <LoginButton
            type="primary"
            htmlType="submit"
            disabled={auth.status === 'saving' || hasErrors(getFieldsError())}
            loading={auth.status === 'saving'}
          >
            SignIn
          </LoginButton>
        </Form.Item>
      </SignInForm>
    </SignInContainer>
  )
}

const mapStateToProps = ({auth}) => {
  return {
    auth,
  }
}

const mapDispatchToProps = {
  login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create<Props>()(SignIn))
