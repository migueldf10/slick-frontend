import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AddConversationModal } from '../style'
import { useHistory } from 'react-router-dom'

export default function AddConversation(props) {
	const history = useHistory()
	const [modalOpen, set_modalOpen] = useState(false)
	const [conversationToAdd, set_conversationToAdd] = useState({
		title: '',
		participants: []
	})
	const togleModal = () => {
		set_modalOpen(!modalOpen)
	}

	const updateConversationForm = (event) => {
		const newConversationObj = { ...conversationToAdd }
		newConversationObj[event.target.id] = event.target.value
		set_conversationToAdd(newConversationObj)
	}

	const postConversation = async (event) => {
		event.preventDefault()
		try {
			console.log('antes de axios', conversationToAdd)
			const postedConversation = await axios.post('http://localhost:4000/conversations', { ...conversationToAdd })

			console.log('conversacion enviada', postedConversation)
			history.push(`/conversation/${postedConversation.data.conversation.id}`)
			set_modalOpen(!modalOpen)


		} catch (error) {
			console.log('error', error)
		}

	}

	const handleUserChange = (event) => {
		const newConversationObj = { ...conversationToAdd }
		newConversationObj.participants[event.target.id].checked = !newConversationObj.participants[event.target.id].checked
		set_conversationToAdd(newConversationObj)

	}

	useEffect(() => {
		const getAllUsers = async () => {
			const response = await axios.get('http://localhost:4000/users')
			const newConversationObj = { ...conversationToAdd }
			newConversationObj.participants = response.data
			newConversationObj.participants = newConversationObj.participants.map(user => {
				return ({ ...user, checked: false })
			})
			set_conversationToAdd(newConversationObj)
			// this throws a warning of exhaustive dependencie, but I don't want to add the state in dependencies and rerender infinitely, and I cant declare state inside right?
		}
		getAllUsers()
	}, [])

	if (!modalOpen) {
		return (
			<div>
				<button onClick={togleModal}>
					Add a conversation
			</button>
			</div>
		)
	}

	return (
		<AddConversationModal>
			<h2>adding a conversation</h2>
			<form onSubmit={(event) => postConversation(event)}>
				<label htmlFor={"title"}>Conversation title</label>
				<input id="title" onChange={updateConversationForm} />
				<br />
				<label>
					select participants<br />
					{conversationToAdd.participants && conversationToAdd.participants.map((user, index) => {
						return (
							<div key={index} >
								<label htmlFor={index}>{user.name}</label>
								<input type='checkbox' id={index} onChange={handleUserChange} />
							</div>
						)
					})}
				</label>
				<input type="submit" value="Submit" />
			</form>
			<button onClick={togleModal}>
				Close
			</button>
		</AddConversationModal >
	)
}
