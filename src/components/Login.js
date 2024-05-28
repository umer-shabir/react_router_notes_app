import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../styledComponents'

const Login = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('mluukkai')
    navigate('/')
  }
  return (
    <div>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          username:
          <Input />
        </div>
        <div>
          password:
          <Input />
        </div>
        <div>
          <Button type="submit" primary="">login</Button>
        </div>
      </form>
    </div>
  )
}

export default Login