import React from 'react'
import {navigate, RouteComponentProps} from '@reach/router'
import {clearLocalStorage} from '../../../services/localStorage'

interface Props extends RouteComponentProps {}

const AdminLogout: React.FunctionComponent<Props> = () => {
	React.useEffect(() => {
		clearLocalStorage()
		navigate('/auth/signin')
	}, [])

	return <></>
}

export default AdminLogout
