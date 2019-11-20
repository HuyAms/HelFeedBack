import React from 'react'
import {RouteComponentProps} from '@reach/router'

interface Props extends RouteComponentProps {}

const AdminHome: React.FunctionComponent<Props> = () => {
	return <p>This is admin home</p>
}

export default AdminHome
