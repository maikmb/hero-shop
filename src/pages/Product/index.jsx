import { Grid } from '@material-ui/core'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductGallery from '../../components/ProductGallery'
import ProductCatalogItem from '../../components/ProductCatalogItem'
import { mock } from '../../config'
import { ProductContainer } from './styles'
import { useAppState } from '../../state/contexts/app-context'
import { ADD_CART_ITEM } from '../../state/actions/app-actions'

export default function ProductPage () {
  const { dispatch } = useAppState()
  let { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (productId) {
      const filteredProduct = mock.products[0]
      console.log('Filtered Product', filteredProduct)
      setProduct(filteredProduct)
    }
  }, [productId])

  const onAddItemToCart = useCallback(
    product => {
      dispatch({ type: ADD_CART_ITEM, payload: product })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  if (!product) return <p>Carregando produto...</p>

  return (
    <Grid container>
      <Grid item sm={12} md={6}>
        <ProductGallery images={product.images} />
      </Grid>
      <ProductContainer item sm={12} md={6}>
        <ProductCatalogItem
          product={product}
          onAddItemToCart={event => onAddItemToCart(event)}
        />
      </ProductContainer>
    </Grid>
  )
}
