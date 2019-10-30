import styled, {css, DefaultTheme, ThemedStyledProps} from 'styled-components'
import {Link} from '@reach/router'
import {media} from '../../styles/utils'

const hoverEffect = css`
	opacity: 0.8;

	transition: all 0.2s ease-in;

	:hover {
		opacity: 1;
	}
`

export const AppHeader = styled.div`
	z-index: 999;

	${media.phone} {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
`

export const StyledHeader = styled.header`
	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.appColors.primary};
	padding: 2rem 4rem;

	${media.phone} {
		padding: 2rem;
	}
`

export const Navigation = styled.nav`
	display: flex;
	position: relative;

	${media.phone} {
		flex-direction: column;
		align-items: center;
	}
`

export const MenuIcon = styled.img`
	display: none;

	${media.phone} {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
	}
`

export const StyledLink = styled(Link)`
	color: ${props => props.theme.colors.white};
	font-size: ${props => props.theme.fontSizes.lg};
	text-decoration-line: none;
	&:not(:last-of-type) {
		margin-right: 10.6rem;

		${media.phone} {
			margin-right: 0;
			margin-bottom: 1.8rem;
		}
	}

	${hoverEffect}
`

interface LinkContainerProps {
	isOpen: boolean
}

export const LinkContainer = styled.div<any>`
	display: flex;
	align-items: center;
	margin-left: auto;

	${media.phone} {
		transition: height 0.2s ease-in;
		margin-left: 0;
		flex-direction: column;
		margin-top: 1.8rem;
		height: ${props => (props.isOpen ? '600px' : 0)};
		visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
	}
`

export const Banner = styled(Link)`
	display: flex;
	cursor: pointer;
	${hoverEffect};
	text-decoration-line: none;
	color: ${props => props.theme.colors.white};

	${media.phone} {
		flex-direction: column;
		align-items: center;
	}
`

export const Logo = styled.img`
	height: 4.6rem;
	width: 10rem;

	${media.phone} {
		height: auto;
		width: 80%;
	}
`

export const AppName = styled.h1`
	margin-left: 2.2rem;
`

export const BannerFooter = styled.img`
	width: 100%;
	height: 8.1rem;
	margin-top: -2px;

	${media.phone} {
		object-fit: cover;
	}
`
