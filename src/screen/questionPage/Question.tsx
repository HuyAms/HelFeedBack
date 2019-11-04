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
import AwesomeImgSrc from '../../assets/answers-icon/awesome-img.png'
import BadImgSrc from '../../assets/answers-icon/bad-img.png'
import HappyImgSrc from '../../assets/answers-icon/happy-img.png'
import NormalImgSrc from '../../assets/answers-icon/normal-img.png'
import TerribleImgSrc from '../../assets/answers-icon/terrible-img.png'
import IconSlider from '../../components/IconSlider/IconSlider'

interface Props {
	path: string
}

const Question: React.FC<Props> = props => {
	return (
		<Container>
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
				<p>How do you feel about the temperature ?</p>
			</QuestionContainer>

			<AnswerContainer>
				<AnswerContentContainer>
					<AnswerImage src={AwesomeImgSrc} />
					<AnswerLabelContainer>
						<p>Awesome</p>
					</AnswerLabelContainer>
				</AnswerContentContainer>

				<AnswerContentContainer>
					<AnswerImage src={HappyImgSrc} />
					<AnswerLabelContainer>
						<p>Happy</p>
					</AnswerLabelContainer>
				</AnswerContentContainer>

				<AnswerContentContainer>
					<AnswerImage src={NormalImgSrc} />
					<AnswerLabelContainer>
						<p>Normal</p>
					</AnswerLabelContainer>
				</AnswerContentContainer>

				<AnswerContentContainer>
					<AnswerImage src={BadImgSrc} />
					<AnswerLabelContainer>
						<p>Bad</p>
					</AnswerLabelContainer>
				</AnswerContentContainer>

				<AnswerContentContainer>
					<AnswerImage src={TerribleImgSrc} />
					<AnswerLabelContainer>
						<p>Terrible</p>
					</AnswerLabelContainer>
				</AnswerContentContainer>
			</AnswerContainer>

			<MobileAnswerContainer>
				<IconSlider />
			</MobileAnswerContainer>

			<StyledFooter>
				<InstructionButton>
					<h2>?</h2>
				</InstructionButton>
				<h2>Temperature</h2>
				<MobileStyledArrowImage src={ArrowBackSrc} />
				<MobileStyledArrowImage src={ArrowForwardSrc} />
			</StyledFooter>
		</Container>
	)
}

export default Question
