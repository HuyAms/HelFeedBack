import React from 'react'
import {UnordererCategoryList} from './style'
import airImageSrc from '../../assets/categoryAssets/air-image.png'
import cleanImageSrc from '../../assets/categoryAssets/clean-image.png'
import humidityImageSrc from '../../assets/categoryAssets/humidity-image.png'
import lightImageSrc from '../../assets/categoryAssets/light-image.png'
import soundsImageSrc from '../../assets/categoryAssets/noise-image.png'
import temperatureImageSrc from '../../assets/categoryAssets/temperature-image.png'
import CategoryItem from '../../components/CategoryItem/CategroyItem'

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

interface Props {
	path: string
}

export const Category: React.FC<Props> = props => {
	return (
		<UnordererCategoryList>
			{listOfCategories.map(category => (
				<CategoryItem />
			))}
		</UnordererCategoryList>
	)
}

export default Category
