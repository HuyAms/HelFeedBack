import React from 'react'
import {RouteComponentProps} from '@reach/router'
import { connect } from "react-redux";
import { getChannels } from "../../../modules/Channels";

interface Props extends RouteComponentProps {
  getChannels: () => any
}

const AdminHome: React.FunctionComponent<Props> = ({getChannels}) => {

	React.useEffect(() => {
    getChannels()
	}, [])

	return <p>This is admin home</p>
}

const mapDispatchToProps = {
  getChannels,
}

export default connect(
  null,
  mapDispatchToProps,
)(AdminHome)

