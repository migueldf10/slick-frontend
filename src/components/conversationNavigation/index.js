import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MenuWrapper } from './style'
import { Link } from 'react-router-dom'
import AddConversation from './components/addConversation'

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
			<nav className='conversations'>

				{conversations.map((conversation) => {
					return (
						<Link key={conversation.id} to={`/conversation/${conversation.id}`}>{conversation.title}</Link>
					)
				})}
			</nav>
			<AddConversation />
		</MenuWrapper>
	)
}
