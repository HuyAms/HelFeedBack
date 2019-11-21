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
	SubHeading,
} from './style'

interface Props extends RouteComponentProps<{name: string}> {}

const Main: React.FC<Props> = props => {
	const {name} = props

	const goToCategory = () => {
		return navigate(`/channel/${name}/categories`)
	}

	return (
		<Container>
			<ContentContainer>
				<Heading>Welcome to Helsinki Feedback System</Heading>
				<SubHeading>First, tell us, what group are you in?</SubHeading>
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

export default Main
