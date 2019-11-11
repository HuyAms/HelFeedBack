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

interface Props extends RouteComponentProps<{name: string}> {
	channel: ModelState<Channel>
	getChannel: (name: string) => void
}

const Main: React.FC<Props> = props => {
	React.useEffect(() => {
		props.getChannel(props.name)
	}, [])

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
