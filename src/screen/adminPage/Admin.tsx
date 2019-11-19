import React from 'react'

interface Props {
	path: string
}

const Admin: React.FC<Props> = props => {
	return (
		<div>
			<p>This is admin page</p>
		</div>
	)
}

export default Admin
