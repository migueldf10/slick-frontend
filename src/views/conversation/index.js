import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Conversation() {
	const [conversation, set_conversation] = useState({})
	const { conversationId } = useParams()
	console.log(conversationId)

	useEffect(() => {
		const getConversation = async () => {
			const response = await axios.get(`http://localhost:4000/conversations/${conversationId}`)
			set_conversation(response.data)
		}
	}, [])

	console.log(conversation)
	return (
		<div>
			<h1>This is the conversation page</h1>
		</div>
	)
}
