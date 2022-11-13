import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedIn: false}

  negateIsLoggedIn = () => {
    this.setState(prevStateObj => ({
      isLoggedIn: !prevStateObj.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    const messageText = isLoggedIn ? 'Welcome User' : 'Please Login'
    const buttonText = isLoggedIn ? 'Logout' : 'Login'
    return (
      <div className="home-container">
        <div className="card-container">
          {isLoggedIn ? (
            <Message messageText={messageText} />
          ) : (
            <Message messageText={messageText} />
          )}
          {isLoggedIn ? (
            <Logout
              buttonText={buttonText}
              negateIsLoggedIn={this.negateIsLoggedIn}
            />
          ) : (
            <Login
              buttonText={buttonText}
              negateIsLoggedIn={this.negateIsLoggedIn}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Home
