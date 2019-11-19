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
import {Feedback} from '../../models/Feedback'
import {createFeedback} from '../../modules/Feedback'
import Channel from '../../models/Channel'
import {usePrevious} from '../../utils/hooks'

interface Props extends RouteComponentProps<{id: string}> {
	path: string
	getSurvey: (id: string) => void
	survey: ModelState<Survey>
	app: App
	createFeedback: (feedback: Feedback) => any
	channel: Channel
	feedback: ModelState<Feedback>
}

const Question: React.FC<Props> = props => {
	const {getSurvey, survey, app, createFeedback, channel, feedback} = props
	const prevFeedbackStatus = usePrevious(feedback.status)

	React.useEffect(() => {
		if (!app.activeSurveyId) {
			return
		}

		getSurvey(app.activeSurveyId)
	}, [app.activeSurveyId])

	React.useEffect(() => {
		if (prevFeedbackStatus === 'saving' && feedback.status === 'success') {
			onNextQuestion()
		}
	}, [feedback.status])

	const [activeQuestionIndex, setActiveQuestionIndex] = React.useState(0)

	const onNextQuestion = () => {
		if (activeQuestionIndex < survey.data.questions.length - 1)
			setActiveQuestionIndex(index => index + 1)
	}

	const onPreviousQuestion = () => {
		if (activeQuestionIndex > 0) setActiveQuestionIndex(index => index - 1)
	}

	const submitFeedback = (choiceId: string, questionId: string) => {
		const feedback: Feedback = {
			channelId: channel._id,
			surveyId: survey.data._id,
			questionId,
			value: choiceId,
		}

		props.createFeedback(feedback)
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

		const question = sortedItems[activeQuestionIndex]

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
					<p>{question.heading}</p>
				</QuestionContainer>

				<AnswerContainer>
					{question.choices.map(choices => {
						return (
							<AnswerContentContainer
								key={choices._id}
								onClick={() => {
									submitFeedback(choices._id, question._id)
								}}
							>
								<AnswerImage src={choices.imageUrl} />
								<AnswerLabelContainer>
									<p>{choices.value}</p>
								</AnswerLabelContainer>
							</AnswerContentContainer>
						)
					})}
				</AnswerContainer>

				<MobileAnswerContainer>
					<IconSlider
						choices={question.choices}
						onAnswerClick={choiceId => submitFeedback(choiceId, question._id)}
					/>
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

const mapStateToProps = ({survey, app, feedback, channel}) => {
	return {survey, app, feedback, channel}
}

const mapDispatchToProps = {
	getSurvey,
	createFeedback,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Question)
