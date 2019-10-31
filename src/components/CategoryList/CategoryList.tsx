import React from 'react'
import {
	CategoryButton,
	CategoryContainer,
	UnordererCategoryList,
	InstructionButton,
} from './style'
import airImageSrc from '../../assets/categoryAssets/air-image.png'
import cleanImageSrc from '../../assets/categoryAssets/clean-image.png'
import humidityImageSrc from '../../assets/categoryAssets/humidity-image.png'
import lightImageSrc from '../../assets/categoryAssets/light-image.png'
import soundsImageSrc from '../../assets/categoryAssets/noise-image.png'
import temperatureImageSrc from '../../assets/categoryAssets/temperature-image.png'

const temperatureObject = {
	label: 'Temperature',
	imageSource: temperatureImageSrc,
}

const cleaninessObject = {
	label: 'Cleaniness',
	imageSource: cleanImageSrc,
}
const soundObject = {
	label: 'Sounds',
	imageSource: soundsImageSrc,
}
const lightObject = {
	label: 'Light',
	imageSource: lightImageSrc,
}

const airObject = {
	label: 'Air',
	imageSource: airImageSrc,
}
const humidityObject = {
	label: 'Humidity',
	imageSource: humidityImageSrc,
}

const listOfCategories = [
	cleaninessObject,
	soundObject,
	airObject,
	lightObject,
	humidityObject,
	temperatureObject,
]

const createCategoryContainers = () =>
	listOfCategories.map(category => (
		<CategoryContainer>
			<CategoryButton to="question">
				<img src={category.imageSource} alt={category.label} />
				<p>{category.label}</p>
			</CategoryButton>
			<InstructionButton>?</InstructionButton>
		</CategoryContainer>
	))

const CategoryList: React.FC = props => {
	return (
		<UnordererCategoryList>{createCategoryContainers()}</UnordererCategoryList>
	)
}

export default CategoryList
