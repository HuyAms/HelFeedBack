import React from 'react'
import {RouteComponentProps} from '@reach/router'

interface Props extends RouteComponentProps<{name: string}> {}

const TextFeedback: React.FC<Props> = () => {
	return (
		<div>
			<p>Text feedback</p>
		</div>
	)
}
export default TextFeedback
