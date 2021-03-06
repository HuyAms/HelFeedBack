import styled from 'styled-components'
import {media} from '../../styles/utils'

export const Container = styled.div`
	display: flex;

	${media.tabPort} {
		flex-direction: column-reverse;
	}
`

export const ContentContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	position: relative;
	left: 2rem;

	${media.tabPort} {
		align-items: center;
		text-align: center;
		left: 0rem;
	}
`

export const ImageContainer = styled.div`
	flex: 1;
`

export const HeroImage = styled.img`
	display: block;
	width: 70%;
	height: auto;
	margin: 0 auto;

	${media.tabPort} {
		width: 50%;
		max-width: 50rem;
		margin-bottom: 4rem;
	}
`

export const Heading = styled.h1`
	font-size: ${props => props.theme.fontSizes.xxl};
	${media.tabPort} {
		font-size: ${props => props.theme.fontSizes.xl};
	}
`

export const SubHeading = styled.p`
	${media.tabPort} {
		font-size: ${props => props.theme.fontSizes.lg};
	}
`

export const ClassifyButton = styled.div`
	border-radius: 2rem;
	background-color: ${props => props.theme.appColors.secondary};
	width: 80%;
	padding: 2rem 7.7rem;
	text-align: center;
	text-decoration-line: none;
	color: ${props => props.theme.colors.black};
	font-size: ${props => props.theme.fontSizes.lg};

	cursor: pointer;

	:not(:last-child) {
		margin-bottom: 2.1rem;
	}

	${media.tabPort} {
		width: 90%;
		max-width: 70rem;
	}
`
