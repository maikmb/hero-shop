import { Button, Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '../../components/ProductGallery'
import { mock } from '../../config';
import { toCurrencyFormat } from '../../helpers/toCurrencyFormat';
import { ProductContainer, Label } from './styles';

export default function ProductPage() {
    let { productId } = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        if (productId) {
            const filteredProduct = mock.products[0]
            console.log('Filtered Product', filteredProduct)
            setProduct(filteredProduct)
        }
    }, [productId])

    if (!product) return <p>Carregando produto...</p>

    return (
        <Grid container>
            <Grid item sm={12} md={6}>
                <ProductGallery images={product.images} />
            </Grid>
            <ProductContainer item sm={12} md={6}>
                <Label color="textPrimary" variant="h4">{product.title}</Label>
                <Label color="textPrimary" variant="body1">{product.description}</Label>
                <Label color="textPrimary" variant="h5">{toCurrencyFormat(product.value)}</Label>
                <Button color="secondary" variant="contained" size="large" fullWidth={true}>
                    Adicionar ao carrinho
                </Button>
            </ProductContainer>
        </Grid>
    )
}
