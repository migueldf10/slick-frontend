import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ConversationMenu() {
	const [conversations, set_conversations] = useState({})

	useEffect(() => {
		const getConversations = async () => {
			const response = await axios.get('http://localhost:4000/users/2/conversations')
			console.log(response)
		}
		getConversations()
	}, [])

	return (
		<div>
			<h2>iMported</h2>
		</div>
	)
}
