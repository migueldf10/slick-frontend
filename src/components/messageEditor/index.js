import React, { useState } from 'react'

export default function MessageEditor() {
	const [message, set_message] = useState('')
	const postMessage = (event) => {
		console.log('message posted')
	}
	const updateMessage = (event) => {
		console.log(event.target.value)
	}
	return (
		<div>
			<h2>Write your beautiful message</h2>
			<form onSubmit={postMessage}>
				<textarea onChange={updateMessage}></textarea>
			</form>
		</div>
	)
}
