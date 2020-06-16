import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout(props) {
	const { title, children } = props
	return (
		<>
			<Header />
			<div className='content'>
				<h1>{title}</h1>
				{children}
			</div>
			<Footer />
		</>
	)
}
