import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { toCurrencyFormat } from '../../helpers/toCurrencyFormat';
import Carousel from 'react-material-ui-carousel'
import { getRandomInt } from '../../helpers/getRandomInt';
import { CardActionArea } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: 'auto',
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
    media: {
        minHeight: '300px',
        maxHeight: '400px'
    },
    content: {
        padding: '0px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    productInfo: {
        padding: '15px',
        cursor: 'poiter'
    }
}));

export default function CatalogItem({ product }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            {/* <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            /> */}
            {/* <CardMedia
                    className={classes.media}
                    image={product.img}
                    title={product.title}
                /> */}
            <CardContent className={classes.content}>
                <Carousel autoPlay={false} indicators={false} className={classes.media}>
                    {product.images.map(url =>
                        <div>
                            <img src={`${url}${getRandomInt(1, 100)}`} alt={product.title} />
                        </div>
                    )}
                </Carousel>
                <CardActionArea component={Link} to={`/product/${product.id}`}>
                    <div className={classes.productInfo}>
                        <Typography variant="body2" color="textSecondary" component="p">{product.title}</Typography>
                        <Typography variant="body1" color="textPrimary" component="p">{`R$ ${toCurrencyFormat(product.value)}`}</Typography>
                    </div>
                </CardActionArea>
            </CardContent>


            {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="Adicionar ao carrinho">
                    <ShoppingCartIcon />
                </IconButton>
            </CardActions> */}
        </Card>
    );
}