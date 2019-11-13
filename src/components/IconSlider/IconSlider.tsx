import React from 'react'
import Slider from 'react-slick'

import {AnswerContainer, AnswerContentContainer, AnswerImage} from './style'
import Choice from '../../models/Choice'

interface Props {
	choices: Choice[]
}

export const IconSlider: React.FC<Props> = props => {
	const settings = {
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		speed: 500,
		infinite: false,
		initialSlide: 1,
	}

	const {choices} = props

	return (
		<div>
			<Slider {...settings}>
				{choices.map(choices => {
					return (
						<AnswerContainer key={choices.id}>
							<AnswerImage src={choices.imageUrl} style={{margin: '0 auto'}} />
							<AnswerContentContainer>
								<p>{choices.value}</p>
							</AnswerContentContainer>
						</AnswerContainer>
					)
				})}
			</Slider>
		</div>
	)
}

export default IconSlider
