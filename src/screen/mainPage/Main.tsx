import React from 'react'
import HeroImageSrc from '../../assets/hero-image.png'
import {
	ClassifyButton,
	Container,
	ContentContainer,
	Heading,
	HeroImage,
	ImageContainer,
} from './style'

interface Props {
	path: string
}

const Main: React.FC<Props> = props => {
	return (
		<Container>
			<ContentContainer>
				<Heading>Welcome to Helsinki Feedback System</Heading>
				<p>First, tell us, what group are you in?</p>
				<ClassifyButton to="question">Under 13 years old</ClassifyButton>
				<ClassifyButton to="question">Over 13 years old</ClassifyButton>
			</ContentContainer>
			<ImageContainer>
				<HeroImage src={HeroImageSrc} alt="hero image" />
			</ImageContainer>
		</Container>
	)
}

export default Main
