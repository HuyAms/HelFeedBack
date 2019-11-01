import styled from 'styled-components'
import {media} from '../../styles/utils'
import {Link} from '@reach/router'

export const CategoryButton = styled(Link)`
	background-color: ${props => props.theme.colors.lightGrey};
	color: ${props => props.theme.colors.black};
	border-radius: 2rem;
	width: 25rem;
	height: 25rem;
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
	width: 9rem;
	height: 9rem;
	border-radius: 1rem;
	background-color: ${props => props.theme.colors.cyan};
	font-size: ${props => props.theme.fontSizes.xxl};

	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: -4.5rem;
	right: -4.5rem;
`
