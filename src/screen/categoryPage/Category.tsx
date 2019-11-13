import React from 'react'
import {UnordererCategoryList} from './style'
import CategoryItem from '../../components/CategoryItem/CategroyItem'
import {connect} from 'react-redux'
import {RouteComponentProps} from '@reach/router'
import {getCategories} from '../../modules/Categories'
import ModelState from '../../models/bases/ModelState'
import CategoryModel from '../../models/Category'

interface Props extends RouteComponentProps {
	getCategories: () => void
	categories: ModelState<CategoryModel[]>
}

export const Category: React.FC<Props> = props => {
	const {getCategories, categories} = props

	React.useEffect(() => {
		getCategories()
	}, [])

	const createCategoryList = () => {
		return categories.status === 'success'
			? categories.data.map(category => (
					<CategoryItem
						key={category._id}
						categoryName={category.name}
						categoryImageSource={category.imageUrl}
						popupTitle={'Instruction'}
						popupContent={category.instruction.text}
						popupImgUrl={category.instruction.imageUrl}
					/>
			  ))
			: null
	}

	return <UnordererCategoryList>{createCategoryList()}</UnordererCategoryList>
}

const mapStateToProps = ({categories}) => {
	return {categories}
}

const mapDispatchToProps = {
	getCategories,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Category)
