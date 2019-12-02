import styled from 'styled-components'
import { media } from "../../../styles/utils";

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ChannelSelectContainer = styled.div`
margin-right: 2.4rem;

${media.tabPort} {
margin-right: 0;
margin-bottom: 2.4rem;
}
`
