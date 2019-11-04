import {createGlobalStyle} from 'styled-components'
import {media} from './utils'

export const GlobalStyle = createGlobalStyle`
:root {
	font-size: 62.5%;
		
	${media.tabLand} {
		font-size: 56.25%;
	}
		
	${media.tabPort} {
		font-size: 50%;
	}
}

 body {
		font-family: ${props => props.theme.fontStack};
		font-weight: 400;
		line-height: 1.7;
		color: ${props => props.theme.appColors.text} ;
		font-size: ${props => props.theme.fontSizes.md} ;
	}
	
	h1 {
		margin: 0;
		font-size: ${props => props.theme.fontSizes.xl};
		line-height: 1.16;
	}
	
	h2 {
		font-size: ${props => props.theme.fontSizes.lg};
	}
	
	p {
		font-size: ${props => props.theme.fontSizes.lg};
		margin: 0 0 1rem;
	}
	
	.slick-active img {
		width: 12rem;
		height: 12rem;
		transition: all 1s ;
	}
`
