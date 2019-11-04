import React from 'react'
import ReactDOM from 'react-dom'
import 'sanitize.css/sanitize.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import App from './App'
import {ThemeProvider} from 'styled-components'
import * as serviceWorker from './serviceWorker'
import {GlobalStyle} from './styles/GlobalStyle'
import {theme} from './styles/theme'

const app = (
	<ThemeProvider theme={theme}>
		<>
			<App />
			<GlobalStyle />
		</>
	</ThemeProvider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
