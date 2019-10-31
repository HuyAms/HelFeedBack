import styled from 'styled-components'
import {media} from '../../styles/utils'

export const Container = styled.div`
	display: flex;
	${media.tabPort} {
		flex-direction: column-reverse;
	}
`

export const ContentContainer = styled.div``
