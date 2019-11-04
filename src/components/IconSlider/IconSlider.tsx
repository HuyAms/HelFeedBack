import React, {Component} from 'react'
import Slider from 'react-slick'
import AwesomeImgSrc from '../../assets/answers-icon/awesome-img.png'
import BadImgSrc from '../../assets/answers-icon/bad-img.png'
import HappyImgSrc from '../../assets/answers-icon/happy-img.png'
import NormalImgSrc from '../../assets/answers-icon/normal-img.png'
import TerribleImgSrc from '../../assets/answers-icon/terrible-img.png'

import {AnswerImage} from './style'

export default class IconSlider extends Component {
	render() {
		const settings = {
			centerMode: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			speed: 500,
			infinite: false,
			initialSlide: 1,
		}

		return (
			<div>
				<Slider {...settings}>
					<div style={{width: '120px'}}>
						<AnswerImage src={AwesomeImgSrc} style={{margin: '0 auto'}} />
						<div style={{display: 'flex', justifyContent: 'center'}}>
							<p>Awesome</p>
						</div>
					</div>

					<div style={{width: '120px'}}>
						<AnswerImage src={HappyImgSrc} style={{margin: '0 auto'}} />
						<div style={{display: 'flex', justifyContent: 'center'}}>
							<p>Happy</p>
						</div>
					</div>

					<div style={{width: '120px'}}>
						<AnswerImage src={NormalImgSrc} style={{margin: '0 auto'}} />
						<div style={{display: 'flex', justifyContent: 'center'}}>
							<p>Normal</p>
						</div>
					</div>

					<div style={{width: '120px'}}>
						<AnswerImage src={BadImgSrc} style={{margin: '0 auto'}} />
						<div style={{display: 'flex', justifyContent: 'center'}}>
							<p>Bad</p>
						</div>
					</div>

					<div style={{width: '120px'}}>
						<AnswerImage src={TerribleImgSrc} style={{margin: '0 auto'}} />
						<div style={{display: 'flex', justifyContent: 'center'}}>
							<p>Terrible</p>
						</div>
					</div>
				</Slider>
			</div>
		)
	}
}
