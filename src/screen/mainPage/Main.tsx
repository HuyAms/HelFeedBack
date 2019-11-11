import React from 'react'
import {RouteComponentProps} from '@reach/router'
import HeroImageSrc from '../../assets/hero-image.png'
import {
	ClassifyButton,
	Container,
	ContentContainer,
	Heading,
	HeroImage,
	ImageContainer,
} from './style'
import {getChannel} from '../../modules/Channel'
import ModelState from '../../models/bases/ModelState'
import Channel from '../../models/Channel'
import {connect} from 'react-redux'
import {setActiveSurveyId} from '../../services/localStorage'

interface Props extends RouteComponentProps<{name: string}> {
	channel: ModelState<Channel>
	getChannel: (name: string) => void
}

const Main: React.FC<Props> = props => {
	const {name, channel} = props

	React.useEffect(() => {
		props.getChannel(name)
	}, [])

	React.useEffect(() => {
		if (channel.status === 'success') {
			console.log('channel', channel.data)
			setActiveSurveyId(channel.data.activeSurveyId)
		}
	}, [channel])

	return (
		<Container>
			<ContentContainer>
				<Heading>Welcome to Helsinki Feedback System</Heading>
				<p>First, tell us, what group are you in?</p>
				<ClassifyButton to="category">Under 13 years old</ClassifyButton>
				<ClassifyButton to="category">Over 13 years old</ClassifyButton>
			</ContentContainer>
			<ImageContainer>
				<HeroImage src={HeroImageSrc} alt="hero image" />
			</ImageContainer>
		</Container>
	)
}

const mapStateToProps = ({channel}) => {
	return {channel}
}

const mapDispatchToProps = {
	getChannel,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Main)
