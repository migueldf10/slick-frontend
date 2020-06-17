import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { Normalize } from 'styled-normalize';

export default function Layout(props) {
	const { title, children } = props
	return (
		<>
			<Normalize />
			<Header />
			<div className='content'>
				<h1>{title}</h1>
				{children}
			</div>
			<Footer />
		</>
	)
}
