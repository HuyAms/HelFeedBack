import React from 'react'
import {getChannel} from '../../modules/Channel'
import {setActiveSurveyId} from '../../modules/App'
import {connect} from 'react-redux'
import {RouteComponentProps} from '@reach/router'
import ModelState from '../../models/bases/ModelState'
import Channel from '../../models/Channel'
import {Container} from './style'
import Header from '../../components/Header/Header'

interface Props extends RouteComponentProps<{name: string}> {
	getChannel: (name: string) => void
	setActiveSurveyId: (id: string) => any
	channel: ModelState<Channel>
	children: React.ReactNode
}

const ChannelLayout: React.FC<Props> = props => {
	const {name, channel, setActiveSurveyId} = props

	React.useEffect(() => {
		props.getChannel(name)
	}, [])

	React.useEffect(() => {
		if (channel.status === 'success') {
			setActiveSurveyId(channel.data.activeSurveyId)
		}
	}, [channel])

	return (
		channel.status === 'success' && (
			<>
				<Header channelName={channel.data.name} />
				<Container>{props.children}</Container>
			</>
		)
	)
}

const mapStateToProps = ({channel}) => {
	return {channel}
}

const mapDispatchToProps = {
	getChannel,
	setActiveSurveyId,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ChannelLayout)
