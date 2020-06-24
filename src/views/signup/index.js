import React, { useState } from 'react'
import LandingLayout from '../../components/layout/landing'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


export default function Signup(props) {
	const history = useHistory()
	const [form, set_form] = useState({
		name: '',
		email: '',
		password: '',
		passwordRepeat: ''
	})

	const [accountCreated, set_accountCreated] = useState(false)

	const updateLoginForm = (event) => {
		const formToUpdate = { ...form }
		formToUpdate[event.target.id] = event.target.value
		set_form(formToUpdate)
	}
	const submitForm = () => {
		const postNewUser = async () => {
			axios.post('http://localhost:4000/users', {
				...form
			}).then(function (response) {
				console.log(response);
				set_accountCreated(true)
				history.push('/')
			})
				.catch(function (error) {
					console.log('error', error);
				});
		}
		postNewUser()
	}



	return (
		<LandingLayout title='Create an account'>
			{accountCreated ?
				<div>
					<h1> Success! we have created your account and are configuring it. In 3 seconds you will be redirected to your dashboard</h1>
				</div>
				:
				<div>

					<label htmlFor='name'>Name</label>
					<input onChange={updateLoginForm} id="name" />
					<label htmlFor='email'>Email</label>
					<input onChange={updateLoginForm} id="email" />
					<label htmlFor='password'>Password</label>
					<input onChange={updateLoginForm} id="password" />
					<label htmlFor='passwordRepeat'>Password (again)</label>
					<input onChange={updateLoginForm} id="passwordRepeat" />
					<button onClick={submitForm}>Submit</button>
				</div>
			}
		</LandingLayout>



	)
}
