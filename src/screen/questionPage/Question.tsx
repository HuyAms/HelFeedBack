import React from 'react'
import {
	AnswerContainer,
	AnswerContentContainer,
	AnswerImage,
	AnswerLabelContainer,
	Container,
	DataContainer,
	DataContent,
	DataImage,
	InfoContainer,
	InstructionButton,
	MobileAnswerContainer,
	MobileStyledArrowImage,
	QuestionContainer,
	StyledArrowImage,
	StyledFooter,
	TitleContainer,
	TitleContentContainer,
} from './style'
import ArrowBackSrc from '../../assets/arrow-back-icon.svg'
import ArrowForwardSrc from '../../assets/arrow-forward-icon.svg'
import DataImgSrc from '../../assets/weather.png'
import IconSlider from '../../components/IconSlider/IconSlider'
import {getActiveSurveyId} from '../../services/localStorage'
import {getSurvey} from '../../modules/Survey'
import {connect} from 'react-redux'
import ModelState from '../../models/bases/ModelState'
import Survey from '../../models/Survey'

interface Props {
	path: string
	getSurvey: (id: string) => void
	survey: ModelState<Survey>
}

export const Question: React.FC<Props> = props => {
	const {getSurvey, survey} = props

	React.useEffect(() => {
		getSurvey(getActiveSurveyId())
	}, [])

	const renderSurvey = () => {
		const {data} = survey

		return (
			<>
				<TitleContainer>
					<StyledArrowImage src={ArrowBackSrc} />

					<DataContainer>
						<InfoContainer>
							<DataImage src={DataImgSrc} />
							<DataContent>25°C</DataContent>
						</InfoContainer>

						<TitleContentContainer>
							<h2>Temperature</h2>
							<InstructionButton>
								<h2>?</h2>
							</InstructionButton>
						</TitleContentContainer>
					</DataContainer>

					<StyledArrowImage src={ArrowForwardSrc} />
				</TitleContainer>

				<QuestionContainer>
					<p>{data.questions[0].heading}</p>
				</QuestionContainer>

				<AnswerContainer>
					{data.questions[0].choices.map(choices => {
						return (
							<AnswerContentContainer key={choices.id}>
								<AnswerImage src={choices.imageUrl} />
								<AnswerLabelContainer>
									<p>{choices.value}</p>
								</AnswerLabelContainer>
							</AnswerContentContainer>
						)
					})}
				</AnswerContainer>

				<MobileAnswerContainer>
					<IconSlider choices={data.questions[0].choices} />
				</MobileAnswerContainer>

				<StyledFooter>
					<InstructionButton>
						<h2>?</h2>
					</InstructionButton>
					<h2>Temperature</h2>
					<MobileStyledArrowImage src={ArrowBackSrc} />
					<MobileStyledArrowImage src={ArrowForwardSrc} />
				</StyledFooter>
			</>
		)
	}

	return (
		<Container>{survey.status === 'success' ? renderSurvey() : null}</Container>
	)
}

const mapStateToProps = ({survey}) => {
	return {survey}
}

const mapDispatchToProps = {
	getSurvey,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Question)
