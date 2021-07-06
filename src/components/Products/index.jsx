import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductItem from '../ProductItem';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Products({ products }) {
    const classes = useStyles();
  

    const renderProducts = () => {
        return (
            <div className={classes.root}>
                <Grid container spacing={3} >
                    {products.map(pdt => (
                        <Grid item xs={12} md={3} >
                            <ProductItem product={pdt} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }

    return (
        <div>
            {!products ? <p>Carregando produtos...</p> : renderProducts()}
        </div >
    );
}