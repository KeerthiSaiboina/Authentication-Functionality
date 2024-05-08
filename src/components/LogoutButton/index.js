// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {histroy} = props
    Cookies.remove('jwt_token')
    histroy.replace('/login')
  }

  return (
    <button type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
