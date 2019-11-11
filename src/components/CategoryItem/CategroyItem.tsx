import React from 'react'
import {
	CategoryButton,
	InstructionButton,
	CategoryImage,
	CategoryLabel,
} from './style'

const CategoryItem = ({
	categoryImageSource,
	categoryName,
}: {
	categoryImageSource: string
	categoryName: string
}) => {
	return (
		<CategoryButton to="question">
			<CategoryImage src={categoryImageSource} />
			<CategoryLabel>{categoryName}</CategoryLabel>
			<InstructionButton>?</InstructionButton>
		</CategoryButton>
	)
}

export default CategoryItem
