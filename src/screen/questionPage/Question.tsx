import React from 'react'
import IdleTimer from 'react-idle-timer'
import {
	AnswerContainer,
	AnswerContentContainer,
	AnswerImage,
	AnswerLabelContainer,
	Container,
	DataContainer,
	DataImage,
	InfoContainer,
	InstructionButton,
	MobileAnswerContainer,
	QuestionContainer,
	StyledArrowImage,
	TitleContainer,
	TitleContentContainer,
} from './style'
import ArrowBackSrc from '../../assets/arrow-back-icon.svg'
import ArrowForwardSrc from '../../assets/arrow-forward-icon.svg'
import TimeOutIcon from '../../assets/timeout-icon.png'
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

import SuccessIcon1 from '../../assets/reward-icons/005-medal.png'
import SuccessIcon2 from '../../assets/reward-icons/009-medal.png'
import SuccessIcon3 from '../../assets/reward-icons/010-trophy.png'
import SuccessIcon4 from '../../assets/reward-icons/011-medal.png'
import SuccessIcon5 from '../../assets/reward-icons/012-trophy.png'
import SuccessIcon6 from '../../assets/reward-icons/013-medal.png'
import SuccessIcon7 from '../../assets/reward-icons/014-trophy.png'
import SuccessIcon8 from '../../assets/reward-icons/019-medal.png'
import Slider from 'react-slick'

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

interface CompleteImage {
	path: string
}

const Question: React.FC<Props> = props => {
	const {
		getSurvey,
		survey,
		app,
		channel,
		feedback,
	} = props
	const prevFeedbackStatus = usePrevious(feedback.status)
	const [isTimeOutVisible, setTimeoutVisible] = React.useState(false)
	const [isCompleteVisible, setCompleteVisible] = React.useState(false)
	const [isInstructionVisible, setInstructionVisible] = React.useState(false)
	const [timeout] = React.useState(1000 * 60 * 10)
	const [isTimedOut, setIsTimedOut] = React.useState(false)
	const [idleTimer, setIdleTimer] = React.useState(null)

	const sliderRef = React.useRef<Slider>()

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

	const completeImageArray: CompleteImage[] = [
		{
			path: SuccessIcon1,
		},
		{
			path: SuccessIcon2,
		},
		{
			path: SuccessIcon3,
		},
		{
			path: SuccessIcon4,
		},
		{
			path: SuccessIcon5,
		},
		{
			path: SuccessIcon6,
		},
		{
			path: SuccessIcon7,
		},
		{
			path: SuccessIcon8,
		},
	]

	const randomCompleteImage =
		completeImageArray[Math.floor(Math.random() * completeImageArray.length)]
			.path

	const centerChoices = () => {
    const {questions} = survey.data

    const nextQuestion = questions[activeQuestionIndex + 1]

    const choices =
      app.userGroup === UserGroup.child
        ? nextQuestion.choices.filter(choice => {
          return choice.isForChildren === true
        })
        : nextQuestion.choices

    const middleChoiceIndex = Math.floor(choices.length / 2)
    sliderRef.current.slickGoTo(middleChoiceIndex)
  }

	const onNextQuestion = () => {
    const {questions} = survey.data

    if (activeQuestionIndex < questions.length - 1) {
			setActiveQuestionIndex(index => index + 1)
      centerChoices()
		} else {
			setCompleteVisible(true)
		}
	}

	const onPreviousQuestion = () => {
		if (activeQuestionIndex > 0) {
      centerChoices()
      setActiveQuestionIndex(index => index - 1)
		}
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

	const handleNavigateToReport = () => {
		return navigate(`/channel/${channel.data.name}/feedback`)
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
			question => question.category._id === props.id,
		)

		const restItems = data.questions.filter(
			question => question.category._id !== props.id,
		)

		const sortedItems = [...selectedCategoryItems, ...restItems]

		const question = sortedItems[activeQuestionIndex]
		const {category} = question

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
					title="Aikakatkaisu!"
					popupContent="Mitään ei tapahtunut 15:sta minuuttiin"
				>
					<PopupButton onClick={handleCloseTimeout}>Jatka</PopupButton>
					<PopupButton onClick={handleNavigateToHome}>
						Palaa etusivulle
					</PopupButton>
				</PopupModal>

				<PopupModal
					isOpen={isCompleteVisible}
					handleClose={handleCloseComplete}
					imgUrl={randomCompleteImage}
					title="Loistavaa!"
					popupContent="Kiitos vastauksestasi"
				>
					<PopupButton onClick={handleNavigateToCategory}>
						Takaisin kategorioihin
					</PopupButton>
					<PopupButton onClick={handleNavigateToReport}>
						Anna palautetta
					</PopupButton>
				</PopupModal>

				<PopupModal
					isOpen={isInstructionVisible}
					handleClose={handleCloseInstruction}
					imgUrl={category.instruction.imageUrl}
					title={'Instruction'}
					popupContent={category.instruction.text}
				/>

				<TitleContainer>
					<StyledArrowImage
						src={ArrowBackSrc}
						onClick={() => onPreviousQuestion()}
					/>

					<DataContainer>
						<InfoContainer>
							<DataImage src={category.instruction.imageUrl} />
							{/*<DataContent>25°C</DataContent>*/}
						</InfoContainer>

						<TitleContentContainer>
							<h2>{question.category.name}</h2>
							<InstructionButton>
								<h2 onClick={() => setInstructionVisible(true)}>?</h2>
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
						ref={sliderRef}
						choices={choices}
						onAnswerClick={choiceId => submitFeedback(choiceId, question._id)}
					/>
				</MobileAnswerContainer>
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
