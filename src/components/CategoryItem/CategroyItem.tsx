import React from 'react'
import {
	CategoryButton,
	InstructionButton,
	CategoryImage,
	CategoryLabel,
} from './style'
import PopupModal from '../PopupModal/PopupModal'

const CategoryItem = ({
	categoryImageSource,
	categoryName,
	popupTitle,
	popupImgUrl,
	popupContent,
}: {
	categoryImageSource: string
	categoryName: string
	popupTitle: string
	popupImgUrl: string
	popupContent: string
}) => {
	const [isVisible, setVisible] = React.useState(false)

	const handleClose = () => {
		setVisible(false)
	}

	return (
		<CategoryButton>
			<CategoryImage src={categoryImageSource} />
			<CategoryLabel>{categoryName}</CategoryLabel>
			<InstructionButton onClick={() => setVisible(true)}>?</InstructionButton>
			<PopupModal
				title={popupTitle}
				imgUrl={popupImgUrl}
				popupContent={popupContent}
				isOpen={isVisible}
				handleClose={handleClose}
			/>
		</CategoryButton>
	)
}

export default CategoryItem
