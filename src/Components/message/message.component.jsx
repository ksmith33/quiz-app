import './message.styles.scss';

function Message ({ text }) {
	return (
		<div className='message-container'>
			<p>{ text }</p>
		</div>
	)
}

export default Message;