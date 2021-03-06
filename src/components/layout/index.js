import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { Normalize } from 'styled-normalize';
import ConversationNavigation from '../../components/conversationNavigation'

export default function Layout(props) {
	const { title, children } = props
	return (
		<>
			<Normalize />
			<Header />
			<ConversationNavigation />

			<div className='content'>
				<h1>{title}</h1>
				{children}
			</div>
			<Footer />
		</>
	)
}
