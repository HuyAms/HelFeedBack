import React from 'react'
import IdleTimer from 'react-idle-timer'
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
import TimeOutIcon from '../../assets/timeout-icon.png'
import SuccessIcon from '../../assets/reward-icons/005-medal.png'
import IconSlider from '../../components/IconSlider/IconSlider'
import {getSurvey} from '../../modules/Survey'
import {connect} from 'react-redux'
import ModelState from '../../models/bases/ModelState'
import Survey from '../../models/Survey'
import PopupModal from '../../components/PopupModal/PopupModal'

import {navigate, RouteComponentProps} from '@reach/router'
import App, {UserGroup} from '../../models/App'
import {Feedback} from '../../models/Feedback'
import {createFeedback} from '../../modules/Feedback'
import Channel from '../../models/Channel'
import {usePrevious} from '../../utils/hooks'
import {PopupButton} from '../../components/PopupModal/style'
import Category from '../../models/Category'
import InstructionDummyImgUrl from '../../assets/categoryAssets/temperature-image.png'

interface Props extends RouteComponentProps<{id: string}> {
	path: string
	getSurvey: (id: string) => void
	survey: ModelState<Survey>
	app: App
	createFeedback: (feedback: Feedback) => any
	channel: ModelState<Channel>
	feedback: ModelState<Feedback>
	category: ModelState<Category>
}

const Question: React.FC<Props> = props => {
	const {
		getSurvey,
		survey,
		app,
		createFeedback,
		channel,
		feedback,
		category,
	} = props
	const prevFeedbackStatus = usePrevious(feedback.status)
	const [isTimeOutVisible, setTimeoutVisible] = React.useState(false)
	const [isCompleteVisible, setCompleteVisible] = React.useState(false)
	const [isInstructionVisible, setInstructionVisible] = React.useState(false)
	const [timeout] = React.useState(1000 * 60 * 10)
	const [isTimedOut, setIsTimedOut] = React.useState(false)
	const [idleTimer, setIdleTimer] = React.useState(null)

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
		if (activeQuestionIndex < survey.data.questions.length - 1) {
			setActiveQuestionIndex(index => index + 1)
		} else {
			setCompleteVisible(true)
		}
	}

	const onPreviousQuestion = () => {
		if (activeQuestionIndex > 0) setActiveQuestionIndex(index => index - 1)
	}

	const submitFeedback = (choiceId: string, questionId: string) => {
		const feedback: Feedback = {
			channelId: channel.data._id,
			surveyId: survey.data._id,
			questionId,
			value: choiceId,
			userGroup: app.userGroup,
		}

		props.createFeedback(feedback)
	}

	const handleCloseTimeout = () => {
		setTimeoutVisible(false)
	}

	const handleCloseComplete = () => {
		setCompleteVisible(false)
	}

	const handleCloseInstruction = () => {
		setInstructionVisible(false)
	}

	const handleNavigateToCategory = () => {
		return navigate(`/channel/${channel.data.name}/categories`)
	}

	const handleNavigateToHome = () => {
		return navigate(`/channel/${channel.data.name}/`)
	}

	const onAction = () => {
		setIsTimedOut(false)
	}
	const onActive = () => {
		setIsTimedOut(false)
	}

	const onIdle = () => {
		setIsTimedOut(true)
		setTimeoutVisible(true)
		idleTimer.reset()
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

		const choices =
			app.userGroup === UserGroup.child
				? question.choices.filter(choice => {
						return choice.isForChildren === true
				  })
				: question.choices

		return (
			<>
				<IdleTimer
					ref={ref => {
						setIdleTimer(ref)
					}}
					element={document}
					onActive={onActive}
					onIdle={onIdle}
					onAction={onAction}
					debounce={250}
					timeout={timeout}
				/>

				<PopupModal
					isOpen={isTimeOutVisible}
					handleClose={handleCloseTimeout}
					imgUrl={TimeOutIcon}
					title="Oops, timeout!"
					popupContent=""
				>
					<PopupButton onClick={handleCloseTimeout}>Continue</PopupButton>
					<PopupButton onClick={handleNavigateToHome}>
						Return to Home
					</PopupButton>
				</PopupModal>

				<PopupModal
					isOpen={isCompleteVisible}
					handleClose={handleCloseComplete}
					imgUrl={SuccessIcon}
					title="Amazing work!"
					popupContent="Thank you for your feedback"
				>
					<PopupButton onClick={handleNavigateToCategory}>
						Back to category
					</PopupButton>
				</PopupModal>

				<PopupModal
					isOpen={isInstructionVisible}
					handleClose={handleCloseInstruction}
					imgUrl={InstructionDummyImgUrl}
					title={'Instruction'}
					popupContent={channel.data.name}
				/>

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
					{choices.map(choices => {
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
						choices={choices}
						onAnswerClick={choiceId => submitFeedback(choiceId, question._id)}
					/>
				</MobileAnswerContainer>

				<StyledFooter>
					<InstructionButton onClick={() => setInstructionVisible(true)}>
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

const mapStateToProps = ({survey, app, feedback, channel, category}) => {
	return {survey, app, feedback, channel, category}
}

const mapDispatchToProps = {
	getSurvey,
	createFeedback,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Question)
