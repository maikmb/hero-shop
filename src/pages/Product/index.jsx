import { Grid, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '../../components/ProductGallery'
import { mock } from '../../config';

export default function ProductPage() {
    let { productId } = useParams();
    const [product, setProduct] = useState(null)

    useEffect(() => {
        if (productId) {
            const filteredProduct = mock.products[0]
            setProduct(filteredProduct)
        }
    }, [productId])

    if (!product) return <p>Carregando produto...</p>

    return (
        <Grid container>
            <Grid item sm={12} md={6}>
                <ProductGallery images={product.images} />
            </Grid>
            <Grid item sm={12} md={6}>
                <Typography color="textPrimary" variant="h1">{product.name}</Typography>
            </Grid>
        </Grid>
    )
}
