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
import {getSurvey} from '../../modules/Survey'
import {connect} from 'react-redux'
import ModelState from '../../models/bases/ModelState'
import Survey from '../../models/Survey'
import {RouteComponentProps} from '@reach/router'
import App from '../../models/App'

interface Props extends RouteComponentProps<{id: string}> {
	path: string
	getSurvey: (id: string) => void
	survey: ModelState<Survey>
	app: App
}

const Question: React.FC<Props> = props => {
	const {getSurvey, survey, app} = props

	React.useEffect(() => {
		getSurvey(app.activeSurveyId)
	}, [])

	const [activeQuestionIndex, setActiveQuestionIndex] = React.useState(0)

	const onNextQuestion = () => {
		if (activeQuestionIndex < survey.data.questions.length - 1)
			setActiveQuestionIndex(index => index + 1)
	}

	const onPreviousQuestion = () => {
		if (activeQuestionIndex > 0) setActiveQuestionIndex(index => index - 1)
	}

	const renderSurvey = () => {
		const {data} = survey
		const selectedCategoryItems = data.questions.filter(
			question => question.category === props.id,
		)

		const restItems = data.questions.filter(
			question => question.category !== props.id,
		)

		const sortedItems = [...selectedCategoryItems, ...restItems]
		console.log('SortedItems', sortedItems)

		return (
			<>
				<TitleContainer>
					<StyledArrowImage
						src={ArrowBackSrc}
						onClick={() => onPreviousQuestion()}
					/>

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

					<StyledArrowImage
						src={ArrowForwardSrc}
						onClick={() => onNextQuestion()}
					/>
				</TitleContainer>

				<QuestionContainer>
					<p>{sortedItems[activeQuestionIndex].heading}</p>
				</QuestionContainer>

				<AnswerContainer>
					{sortedItems[activeQuestionIndex].choices.map(choices => {
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
					<IconSlider choices={sortedItems[activeQuestionIndex].choices} />
				</MobileAnswerContainer>

				<StyledFooter>
					<InstructionButton>
						<h2>?</h2>
					</InstructionButton>
					<h2>Temperature</h2>
					<MobileStyledArrowImage
						src={ArrowBackSrc}
						onClick={() => onPreviousQuestion()}
					/>
					<MobileStyledArrowImage
						src={ArrowForwardSrc}
						onClick={() => onNextQuestion()}
					/>
				</StyledFooter>
			</>
		)
	}

	return (
		<Container>{survey.status === 'success' ? renderSurvey() : null}</Container>
	)
}

const mapStateToProps = ({survey, app}) => {
	return {survey, app}
}

const mapDispatchToProps = {
	getSurvey,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Question)
