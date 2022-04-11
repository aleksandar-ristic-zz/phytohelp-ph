const SubmitMessage = ({ message = 'success' }) => {
	return <div className={`message ${message.type}`}>{message.text}</div>
}

export default SubmitMessage
