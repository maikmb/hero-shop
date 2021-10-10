import { Button } from '@material-ui/core'
import React from 'react'
import { Label } from './styles'
import { toCurrencyFormat } from '../../helpers/toCurrencyFormat'

export default function ProductCatalogItem ({ product, onAddItemToCart }) {
  return (
    <>
      <Label color='textPrimary' variant='h4'>
        {product.title}
      </Label>
      <Label color='textPrimary' variant='body1'>
        {product.description}
      </Label>
      <Label color='textPrimary' variant='h5'>
        {toCurrencyFormat(product.value)}
      </Label>
      <Button
        color='secondary'
        variant='contained'
        size='large'
        fullWidth={true}
        onClick={_ => onAddItemToCart(product)}
      >
        Adicionar ao carrinho
      </Button>
    </>
  )
}
