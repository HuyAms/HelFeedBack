import React from 'react'
import {
	CategoryButton,
	InstructionButton,
	CategoryImage,
	CategoryLabel,
	ContentContainer,
} from './style'
import PopupModal from '../PopupModal/PopupModal'
import {navigate, RouteComponentProps} from '@reach/router'
import Category from '../../models/Category'

interface Props extends RouteComponentProps<{channelName: string}> {
	category: Category
}

const CategoryItem: React.FC<Props> = props => {
	const {category, channelName: channelName} = props
	const [isVisible, setVisible] = React.useState(false)
	const {imageUrl, name, instruction, _id} = category

	const handleClose = () => {
		setVisible(false)
	}

	const goToQuestionPage = () => {
		return navigate(`/channel/${channelName}/categories/${_id}/questions`)
	}

	return (
		<CategoryButton>
			<ContentContainer onClick={goToQuestionPage}>
				<CategoryImage src={imageUrl} />
				<CategoryLabel>{name}</CategoryLabel>
			</ContentContainer>
			<InstructionButton onClick={() => setVisible(true)}>?</InstructionButton>
			<PopupModal
				isOpen={isVisible}
				handleClose={handleClose}
				imgUrl={instruction.imageUrl}
				title={name}
				popupContent={instruction.text}
				completeButtonIsHidden={true}
				timeoutButtonIsHidden={true}
			></PopupModal>
		</CategoryButton>
	)
}

export default CategoryItem
