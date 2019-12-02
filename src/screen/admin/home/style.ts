import styled from 'styled-components'
import { media } from "../../../styles/utils";

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2.4rem;
  justify-content: space-between;
`

export const ChannelSelectContainer = styled.div`

${media.phone} {
margin-right: 0;
margin-bottom: 2.4rem;
}
`

export const ChartHeader = styled.div`
width: 600px;

${media.phone} {
width: 100%;
}
`
