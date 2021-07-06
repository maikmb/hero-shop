import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { toCurrencyFormat } from '../../helpers/toCurrencyFormat';
import CardActionArea from '@material-ui/core/CardActionArea';
import Carousel from 'react-material-ui-carousel'
import { getRandomInt } from '../../helpers/getRandomInt';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin: 'auto'
    },
    media: {
        minHeight: '300px',
        maxHeight: '300px'
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
        padding: '15px'
    }
}));

export default function ProductItem({ product }) {
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
                    {product.images.map(url => <img src={`${url}${getRandomInt(1, 50)}`} alt={product.title} />)}
                </Carousel>
                <CardActionArea className={classes.productInfo}>
                    <Typography variant="body2" color="textSecondary" component="p">{product.title}</Typography>
                    <Typography variant="body1" color="textPrimary" component="p">{toCurrencyFormat(product.value)}</Typography>
                </CardActionArea>
            </CardContent>


            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="Adicionar ao carrinho">
                    <ShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}