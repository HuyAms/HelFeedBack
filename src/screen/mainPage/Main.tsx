import React from 'react'
import {navigate, RouteComponentProps} from '@reach/router'
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
import {setActiveSurveyId, setChannelName} from '../../services/localStorage'

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
			setActiveSurveyId(channel.data.activeSurveyId)
			setChannelName(channel.data.name)
		}
	}, [channel])

	const goToCategory = () => {
		return navigate(`/channel/${name}/categories`)
	}

	return (
		<Container>
			<ContentContainer>
				<Heading>Welcome to Helsinki Feedback System</Heading>
				<p>First, tell us, what group are you in?</p>
				<ClassifyButton onClick={goToCategory}>
					Under 13 years old
				</ClassifyButton>
				<ClassifyButton onClick={goToCategory}>
					Over 13 years old
				</ClassifyButton>
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
