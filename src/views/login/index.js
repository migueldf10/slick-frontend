import React, { useState } from 'react'
import LandingLayout from '../../components/layout/landing'
import { useHistory } from 'react-router-dom'


export default function Login(props) {
	const history = useHistory()

	const [form, set_form] = useState({
		email: '',
		password: ''
	})

	const updateLoginForm = (event) => {
		const formToUpdate = { ...form }
		formToUpdate[event.target.id] = event.target.value
		set_form(formToUpdate)
	}
	const submitForm = () => {
		console.log('form submitted', form)
		history.push('/')
	}

	return (
		<LandingLayout title='Login'>
			<label htmlFor='email'>Email</label>
			<input onChange={updateLoginForm} id="email" />
			<label htmlFor='password'>Password</label>
			<input onChange={updateLoginForm} id="password" />
			<button onClick={submitForm}>Submit</button>
		</LandingLayout>



	)
}
