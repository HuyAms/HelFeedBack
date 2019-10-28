import styled, {css} from 'styled-components'
import {Link} from '@reach/router'
import {media} from '../../styles/utils'

const hoverEffect = css`
	opacity: 0.8;

	transition: all 0.2s ease-in;

	:hover {
		opacity: 1;
	}
`

export const StyledHeader = styled.header`
	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.appColors.primary};
	padding: 2rem 4rem;
`

export const Navigation = styled.nav`
	display: flex;

	${media.tabPort} {
		flex-direction: column;
		align-items: center;
	}
`

export const StyledLink = styled(Link)`
	color: ${props => props.theme.colors.white};
	font-size: ${props => props.theme.fontSizes.lg};
	text-decoration-line: none;
	&:not(:last-of-type) {
		margin-right: 10.6rem;

		${media.tabPort} {
			margin-right: 0;
			margin-bottom: 1.8rem;
		}
	}

	${hoverEffect}
`

export const LinkContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;

	${media.tabPort} {
		margin-left: 0;
		flex-direction: column;
		margin-top: 1.8rem;
	}
`

export const Banner = styled(Link)`
	display: flex;
	cursor: pointer;
	${hoverEffect};
	text-decoration-line: none;
	color: ${props => props.theme.colors.white};

	${media.tabPort} {
		flex-direction: column;
		align-items: center;
	}
`

export const Logo = styled.img`
	height: 4.6rem;
	width: 10rem;
`

export const AppName = styled.h1`
	margin-left: 2.2rem;
`

export const BannerFooter = styled.img`
	width: 100%;
	height: 8.1rem;
	margin-top: -2px;
	${media.tabPort} {
		object-fit: cover;
	}
`
