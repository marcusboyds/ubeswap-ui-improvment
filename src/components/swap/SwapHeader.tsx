import React from 'react'
import styled from 'styled-components'

import { TYPE } from '../../theme'
import { StyledNavLink } from '../Header'
import { RowBetween } from '../Row'
import Settings from '../Settings'

const StyledSwapHeader = styled.div`
  padding: 12px 1rem 0px 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  max-width: 420px;
  color: ${({ theme }) => theme.text2};
`
const StyledFlexDiv = styled.div`
  display: flex;
  align-items: center;
`

export default function SwapHeader({
  title = 'Swap',
  hideSettings = false,
}: {
  title?: string
  hideSettings?: boolean
}) {
  return (
    <StyledSwapHeader>
      <RowBetween>
        {title === 'Swap' ? (
          <StyledFlexDiv>
            <TYPE.black my={2} fontWeight={500}>
              {title}
            </TYPE.black>
            <StyledNavLink id={'limit-orders-drawer-nav-link'} to={'/limit-order'}>
              Limit Order
            </StyledNavLink>
          </StyledFlexDiv>
        ) : (
          <StyledFlexDiv>
            <TYPE.black my={2} fontWeight={500}>
              {title}
            </TYPE.black>
            <StyledNavLink id={`swap-nav-link`} to={'/swap'}>
              Swap
            </StyledNavLink>
          </StyledFlexDiv>
        )}

        {hideSettings || <Settings />}
      </RowBetween>
    </StyledSwapHeader>
  )
}
