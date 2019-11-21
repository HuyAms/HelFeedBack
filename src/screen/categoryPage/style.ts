import styled from 'styled-components'
import {media} from '../../styles/utils'

export const UnordererCategoryList = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10rem;
	justify-items: center;
	padding: 0;
	position: relative;

	${media.phone} {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 4rem;
		grid-column-gap: 0;
		top: 2rem;
	}
`
