import styled from 'styled-components'
import {media} from '../../styles/utils'

export const CategoryButton = styled.div`
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

	${media.phone} {
		padding: 1rem;
		width: 15rem;
		height: 15rem;
		size: 1rem;
	}
`
export const CategoryLabel = styled.p`
	${media.phone} {
		font-size: ${props => props.theme.fontSizes.md};
		position: relative;
		top: 0.5rem;
	}
`

export const CategoryImage = styled.img`
	width: 80%;

	${media.phone} {
		position: relative;
		top: 0.5rem;
	}
`

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.6rem;

	cursor: pointer;
	${media.phone} {
		padding: 0;
	}
`

export const InstructionButton = styled.div`
	width: 5rem;
	height: 5rem;
	border-radius: 1rem;
	background-color: ${props => props.theme.colors.cyan};
	font-size: ${props => props.theme.fontSizes.xl};

	display: flex;
	align-items: center;
	justify-content: center;

	position: absolute;
	top: -3rem;
	right: -2rem;

	cursor: pointer;
`
