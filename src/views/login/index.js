import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'

export default function Login() {
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
	}

	return (
		<Layout title='Login'>
			<label htmlFor='email'>Email</label>
			<input onChange={updateLoginForm} id="email" />
			<label htmlFor='password'>Password</label>
			<input onChange={updateLoginForm} id="password" />
			<button onClick={submitForm}>Submit</button>
		</Layout>



	)
}
