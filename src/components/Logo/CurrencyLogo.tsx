import { Currency, ETHER, Token } from '@pancakeswap/sdk'
import { BinanceIcon } from '@pancakeswap/uikit'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import getTokenLogoURL from '../../utils/getTokenLogoURL'
import Logo from './Logo'

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }
      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    return <BinanceIcon width={size} style={style} />
  }

  // if (currency?.symbol === 'CHY') {
  //   return <StyledLogo srcs={['/images/tokens/0x8F0697bE1D6AF7e3415D87d6BaD1073e5c6459D2.png']} size={size} style={style} alt="Token Logo" />
  // }

  if (currency?.symbol === 'BPT') {
    return <StyledLogo srcs={['/images/tokens/0x4b2BE03d1D59e1D7fEf4Dd22E364f1A00BC18299.png']} size={size} style={style} alt="Token Logo" />
  }

  // if (currency?.symbol === 'CGOLD') {
  //   return <StyledLogo srcs={['/images/tokens/0xd490E8eeB306558c764c806E1Ce159e7973eFaB2.png']} size={size} style={style} alt="Token Logo" />
  // }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
