import './index.css'

const Logout = props => {
  const {buttonText, negateIsLoggedIn} = props
  console.log(props)
  console.log(buttonText)
  return (
    <button onClick={negateIsLoggedIn} type="button">
      {buttonText}
    </button>
  )
}

export default Logout
