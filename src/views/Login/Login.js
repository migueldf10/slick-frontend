import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'

export default function Login() {
	const [form, set_form] = useState({
		email: '',
		password: ''
	})

	const updateLoginForm = (event) => {
		console.log(event.target.id)
		console.log(event.target.value)
	}
	const submitForm = () => {
		console.log('form submitted')
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
