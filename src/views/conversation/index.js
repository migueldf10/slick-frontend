import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Layout from '../../components/layout'
import MessageEditor from '../../components/messageEditor'
export default function Conversation() {
	const [conversation, set_conversation] = useState({})
	const { conversationId } = useParams()

	useEffect(() => {
		const getConversation = async () => {
			const response = await axios.get(`http://localhost:4000/conversations/${conversationId}`)
			set_conversation(response.data)
		}
		getConversation()
	}, [conversationId])
	return (
		<Layout>
			<h1>This is the conversation page</h1>
			{conversation.users ?
				<h2>Participants</h2>
				: <h2>Add some participants!</h2>}
			{conversation.users && conversation.users.map((user) => {
				return (
					<div key={user.id}>
						{user.name}
					</div>
				)
			})}

			{conversation.messages && conversation.messages.length > 0 ?
				<div>
					<MessageEditor />

					<h2>messages</h2>
					{conversation.messages && conversation.messages.map((message) => {
						return (
							<div key={message.id}>
								{message.body}
							</div>
						)
					})}
				</div>
				:
				<div>

					<h2>Break the ice and write something nice!</h2>
					<MessageEditor />

				</div>
			}

		</Layout>
	)
}
