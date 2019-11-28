import React from 'react'
import Slider from 'react-slick'

import {AnswerImage, AnswerText} from './style'
import Choice from '../../models/Choice'

interface Props {
	choices: Choice[]
	onAnswerClick: (choiceId: string) => void
	ref
}

export const IconSlider: React.FC<Props> = React.forwardRef(
	(props, ref: React.Ref<Slider>) => {

		const settings = {
			centerMode: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			speed: 500,
			infinite: false,
			initialSlide: Math.floor(props.choices.length/2),
			arrows: true,
		}

		const {choices} = props

		return (
			<div>
				<Slider ref={ref} {...settings}>
					{choices.map(choices => {
						return (
							<div
								style={{
									width: '90px',
								}}
								key={choices._id}
								onClick={() => props.onAnswerClick(choices._id)}
							>
								<AnswerImage
									src={choices.imageUrl}
									style={{margin: '0 auto'}}
								/>
								<AnswerText>{choices.value}</AnswerText>
							</div>
						)
					})}
				</Slider>
			</div>
		)
	},
)

export default IconSlider
