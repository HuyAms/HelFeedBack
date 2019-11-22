import React from 'react'
import {UnordererCategoryList} from './style'
import CategoryItem from '../../components/CategoryItem/CategroyItem'
import {connect} from 'react-redux'
import {RouteComponentProps} from '@reach/router'
import {getCategories} from '../../modules/Categories'
import {getSurvey} from '../../modules/Survey'
import ModelState from '../../models/bases/ModelState'
import CategoryModel from '../../models/Category'
import App from '../../models/App'

interface Props extends RouteComponentProps<{name: string}> {
	getCategories: () => void
	categories: ModelState<CategoryModel[]>
	getSurvey: (id: string) => void
	app: App
}

const Category: React.FC<Props> = props => {
	const {getCategories, categories, getSurvey, name, app} = props

	React.useEffect(() => {
		getCategories()
		getSurvey(app.activeSurveyId)
	}, [])

	const createCategoryList = () => {
		return categories.status === 'success'
			? categories.data.map(category => (
					<CategoryItem
						key={category._id}
						category={category}
						channelName={name}
					/>
			  ))
			: null
	}

	return (
		<div>
			<UnordererCategoryList>{createCategoryList()}</UnordererCategoryList>
		</div>
	)
}

const mapStateToProps = ({categories, app}) => {
	return {categories, app}
}

const mapDispatchToProps = {
	getCategories,
	getSurvey,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Category)
