import {css, DefaultTheme} from 'styled-components'

export const colors = {
	blue: '#001BB7',
	cyan: '#8DF5D9',
	white: '#ffffff',
	black: '#000000',
	lightGrey: '#C4C4C4',
	gray: '#C4C4C4',
}

export const appColors = {
	primary: colors.blue,
	secondary: colors.cyan,
	text: colors.black,
}

export const fontStack = css`'Arimo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol'`

export const fontSizes = {
	xs: '0.8rem',
	sm: '1.4rem',
	md: '1.6rem',
	lg: '2.4rem',
	xl: '3.6rem',
	xxl: '6rem',
}

const space = [
	'0',
	'.4rem',
	'.8rem',
	'1.2rem',
	'1.6rem',
	'2.0rem',
	'3.2rem',
	'4.8rem',
	'6.4rem',
	'9.6rem',
]

export const theme: DefaultTheme = {
	space,
	fontSizes,
	appColors,
	colors,
	fontStack,
}
