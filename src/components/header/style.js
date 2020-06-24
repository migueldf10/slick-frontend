import styled from 'styled-components'
import colors from '../../styles/colors'

export const HeaderWrapper = styled.nav`
ul{

	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin:0px;
	padding:0px;
	li{
		list-style: none;
		margin:0px;
		padding: 10px 14px;
	}
}
	background: ${colors.grey2};
`

