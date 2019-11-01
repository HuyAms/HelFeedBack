import React, {Component} from 'react'
import Slider from 'react-slick'
import AnswerImageSrc from '../../assets/awesome-img.png'
import {AnswerImage} from './style'

export default class CenterMode extends Component {
	render() {
		const settings = {
			centerMode: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			speed: 500,
		}

		return (
			<div>
				<h2>Center Mode</h2>
				<Slider {...settings}>
					<div style={{width: '120px'}}>
						<AnswerImage src={AnswerImageSrc} style={{margin: '0 auto'}} />
					</div>
					<div style={{width: '120px'}}>
						<AnswerImage src={AnswerImageSrc} style={{margin: '0 auto'}} />
					</div>
					<div style={{width: '120px'}}>
						<AnswerImage src={AnswerImageSrc} style={{margin: '0 auto'}} />
					</div>
					<div style={{width: '120px'}}>
						<AnswerImage src={AnswerImageSrc} style={{margin: '0 auto'}} />
					</div>
					<div style={{width: '120px'}}>
						<AnswerImage src={AnswerImageSrc} style={{margin: '0 auto'}} />
					</div>
				</Slider>
			</div>
		)
	}
}
