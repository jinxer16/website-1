import { Currency, Token } from '@pancakeswap/sdk'
import { ETHER } from 'components/SearchModal/ETHER'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'ETHER'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
