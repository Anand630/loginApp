import './index.css'

const Message = props => {
  const {messageText} = props
  return <h1 className="message">{messageText}</h1>
}

export default Message
