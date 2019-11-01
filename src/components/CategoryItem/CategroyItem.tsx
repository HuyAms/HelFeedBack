import React from 'react'
import {CategoryButton, InstructionButton, CategoryImage} from './style'
import temperatureImageSrc from '../../assets/categoryAssets/temperature-image.png'

const CategoryItem: React.FC = props => {
	return (
		<CategoryButton to="question">
			<CategoryImage src={temperatureImageSrc} />
			<p>Temperature</p>
			<InstructionButton>?</InstructionButton>
		</CategoryButton>
	)
}

export default CategoryItem
