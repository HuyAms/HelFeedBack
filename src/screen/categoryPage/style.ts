import styled from 'styled-components'
import {media} from '../../styles/utils'

export const UnordererCategoryList = styled.ul`
	width: 100%;
	background-color: yellow;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10rem;
	justify-items: center;
	padding: 0;

	${media.phone} {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 5rem;
	}
`
