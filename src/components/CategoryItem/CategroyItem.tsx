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
import timeoutIcon from '../../assets/timeout-icon.png'
import rewardIcon from '../../assets/reward-icons/010-trophy.png'

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
				type="timeout"
				isOpen={isVisible}
				handleClose={handleClose}
				imgUrl={timeoutIcon}
				title="Oops, timeout!"
				popupContent=""
			/>
		</CategoryButton>
	)
}

export default CategoryItem
