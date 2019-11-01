import styled from 'styled-components'
import {media} from '../../styles/utils'
import {Link} from '@reach/router'

export const CategoryButton = styled(Link)`
	background-color: ${props => props.theme.colors.lightGrey};
	color: ${props => props.theme.colors.black};
	border-radius: 2rem;
	width: 20rem;
	height: 20rem;
	padding: 1.2rem;
	text-decoration: none;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	position: relative;
`

export const CategoryImage = styled.img``

export const InstructionButton = styled.div`
	width: 6rem;
	height: 6rem;
	border-radius: 1rem;
	background-color: ${props => props.theme.colors.cyan};
	font-size: ${props => props.theme.fontSizes.xl};

	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: -3rem;
	right: -3rem;
`
