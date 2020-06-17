import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MenuWrapper } from './style'

export default function ConversationNavigation() {
	const [conversations, set_conversations] = useState([])

	useEffect(() => {
		const getConversations = async () => {
			const response = await axios.get('http://localhost:4000/users/1/conversations')
			set_conversations(response.data.conversations)
		}
		getConversations()
	}, [])

	return (
		<MenuWrapper>
			{conversations.map((conversation) => {
				return (
					<h2 key={conversation.id}>{conversation.title}</h2>
				)
			})}
		</MenuWrapper>
	)
}
