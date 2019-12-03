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
import {UserGroup} from '../../models/App'
import {connect} from 'react-redux'
import {setUserGroup} from '../../modules/App'

interface Props extends RouteComponentProps<{name: string}> {
	setUserGroup: (userGroup: UserGroup) => any
}

const Main: React.FC<Props> = props => {
	const {name, setUserGroup} = props

	const onUserGroupButtonClick = (userGroup: UserGroup) => {
		setUserGroup(userGroup)
		navigate(`/channel/${name}/categories`)
	}

	return (
		<Container>
			<ContentContainer>
				<Heading>Helsingin kaupungin kyselyjärjestelmä</Heading>
				<SubHeading>Ensiksi, valitse kumpaan ryhmään kuulut</SubHeading>
				<ClassifyButton onClick={() => onUserGroupButtonClick(UserGroup.child)}>
					10-vuotias tai alle
				</ClassifyButton>
				<ClassifyButton onClick={() => onUserGroupButtonClick(UserGroup.adult)}>
					Yli 10-vuotias
				</ClassifyButton>
			</ContentContainer>
			<ImageContainer>
				<HeroImage src={HeroImageSrc} alt="hero image" />
			</ImageContainer>
		</Container>
	)
}

const mapDispatchToProps = {
	setUserGroup,
}

export default connect(
	null,
	mapDispatchToProps,
)(Main)
