import styled from 'styled-components'
import colors from '../../styles/colors'

export const MenuWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 14px 8px;
	.conversations{
		a{
			padding: 4px 6px;
			margin: 0 4px;
			background: ${colors.grey2};
		}
	}
`

export const AddConversationModal = styled.div`
	position: fixed;
	top: 30px;
	bottom:30px;
	left:30px;
	right: 30px;
	background: blueviolet;
	padding: 40px 12px;
`
