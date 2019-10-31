import React from 'react'
import {ContentContainer, Container} from './style'
import CategoryList from '../../components/CategoryList/CategoryList'

interface Props {
	path: string
}

export const Category: React.FC<Props> = props => {
	return (
		<Container>
			<ContentContainer>
				<CategoryList></CategoryList>
			</ContentContainer>
		</Container>
	)
}

export default Category
