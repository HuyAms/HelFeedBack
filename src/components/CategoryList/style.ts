import styled from 'styled-components'
import {media} from '../../styles/utils'
import {Link} from '@reach/router'

export const UnordererCategoryList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
`
export const CategoryContainer = styled.li`
	background-color: blueviolet;
	display: flex;
	flex-direction: row;
	margin: 2rem 8rem 2rem 8rem;
	max-width: 22rem;

	${media.phone} {
		margin: 2rem 8rem 2rem 8rem;
		min-width: 5rem;
		min-height: 12rem;
	}
`

export const CategoryButton = styled(Link)`
	display: flex;
	flex-direction: column;
	border-radius: 2rem;
	padding: 1rem;
	align-items: center;
	text-decoration-line: none;
	font-size: ${props => props.theme.fontSizes.lg};
	background-color: ${props => props.theme.colors.lightGrey};
	min-width: 22rem;
	max-height: 22rem;

	${media.phone} {
		font-size: ${props => props.theme.fontSizes.md};
		min-width: 12rem;
		max-height: 12rem;
	}

	img {
		${media.phone} {
			width: 90%;
		}
	}
`
export const InstructionButton = styled.button`
	background-color: ${props => props.theme.colors.cyan};
	position: relative;
	right: 5rem;
	bottom: 3rem;
	width: auto;
	height: 40%;
	min-width: 8rem;
	max-height: 8rem;
	border-radius: 2rem;
	font-size: ${props => props.theme.fontSizes.xxl};

	${media.phone} {
		font-size: ${props => props.theme.fontSizes.xl};
	}
`
