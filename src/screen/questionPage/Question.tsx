import React from 'react'
import {
	AnswerContainer,
	AnswerContentContainer,
	AnswerImage,
	AnswerLabelContainer,
	Container,
	ContentContainer,
	DataContentContainer,
	DataImage,
	InstructionButton,
	QuestionContainer,
	QuestionContentContainer,
	StyledArrowImage,
	TitleContainer,
	TitleContentContainer,
} from './style'
import ArrowBackSrc from '../../assets/arrow-back-icon.svg'
import ArrowForwardSrc from '../../assets/arrow-forward-icon.svg'
import DataImgSrc from '../../assets/weather.png'
import AwesomeEmoSrc from '../../assets/awesome-img.png'

interface Props {
	path: string
}

const Question: React.FC<Props> = props => {
	return (
		<Container>
			<TitleContainer>
				<StyledArrowImage src={ArrowBackSrc} />
				<TitleContentContainer>
					<h2>Temperature</h2>
					<InstructionButton>?</InstructionButton>
				</TitleContentContainer>
				<StyledArrowImage src={ArrowForwardSrc} />
			</TitleContainer>
			<QuestionContainer>
				<QuestionContentContainer>
					<p>How do you feel about the temperature ?</p>
				</QuestionContentContainer>
				<DataContentContainer>
					<ContentContainer>
						<p>Temperature: 16 Degree</p>
					</ContentContainer>
					<DataImage src={DataImgSrc} />
				</DataContentContainer>
			</QuestionContainer>
			<AnswerContainer>
				<AnswerContentContainer>
					<AnswerImage src={AwesomeEmoSrc} />
					<AnswerLabelContainer>
						<p>Awesome</p>
					</AnswerLabelContainer>
				</AnswerContentContainer>
				<AnswerContentContainer>
					<AnswerImage src={AwesomeEmoSrc} />
					<AnswerLabelContainer>
						<p>Awesome</p>
					</AnswerLabelContainer>
				</AnswerContentContainer>
				<AnswerContentContainer>
					<AnswerImage src={AwesomeEmoSrc} />
					<AnswerLabelContainer>
						<p>Awesome</p>
					</AnswerLabelContainer>
				</AnswerContentContainer>
				<AnswerContentContainer>
					<AnswerImage src={AwesomeEmoSrc} />
					<AnswerLabelContainer>
						<p>Awesome</p>
					</AnswerLabelContainer>
				</AnswerContentContainer>
				<AnswerContentContainer>
					<AnswerImage src={AwesomeEmoSrc} />
					<AnswerLabelContainer>
						<p>Awesome</p>
					</AnswerLabelContainer>
				</AnswerContentContainer>
			</AnswerContainer>
		</Container>
	)
}

export default Question
