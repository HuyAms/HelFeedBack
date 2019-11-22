import styled from 'styled-components'
import {hoverEffect} from '../Header/style'
import {media} from '../../styles/utils'

export const PopupBackground = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const PopupContainer = styled.div`
	position: relative;
	width: 40rem;
	height: 50rem;
	background-color: white;

	border-radius: 2rem;

	${media.phone} {
		z-index: 999;
	}
`

export const CloseContainer = styled.div`
	position: absolute;
	left: 1rem;
	top: 1rem;
	font-size: ${props => props.theme.fontSizes.lg};
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	background-color: ${props => props.theme.colors.lightGrey};
	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	${hoverEffect}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	overflow: auto;
	align-items: center;

	height: 100%;
`

export const StyledTitle = styled.h1`
	text-align: center;
	margin-top: 3.6rem;
	font-size: ${props => props.theme.fontSizes.xl};
`

export const LabelImg = styled.img`
	width: auto;
	height: 20rem;
	margin-top: 2.4rem;
`

export const PopupContent = styled.p`
	margin-top: 2.4rem;
	padding: 0 1.2rem;
`
export const PopupButtonContainer = styled.div`
	position: relative;
	text-align: center;
`

export const PopupButton = styled.button`
	background-color: ${props => props.theme.colors.cyan};
	border-radius: 2rem;
	border: none;
	margin: 0.5rem;
	width: 30rem;
	height: 6rem;

	font-size: ${props => props.theme.fontSizes.md};

	cursor: pointer;
`
