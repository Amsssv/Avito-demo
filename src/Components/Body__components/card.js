import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { createTheme, InputAdornment } from '@mui/material';

const customTheme = createTheme({
	card: {
		display: 'flex',
		mt: 2,
	},
	cardMedia: {
		flexGrow: 0,
		width: 300
	},
	cardContent: {
		flexGrow: 1
	},
	cardAction: {
		alignItems: 'flex-start'
	},
})


export default function Cards() {

	const classes = customTheme

	return (
		<Card sx={classes.card}>
			<CardMedia
				sx={classes.cardMedia}
				component="img"
				image="https://68.img.avito.st/208x156/13363088268.jpg"
			/>
			<div>
				<CardContent sx={classes.cardContent}>
					<Typography variant="h6" id='price'>$ 1200</Typography>
					<Typography color="text.secondary">
						This impressive paella is a perfect party dish and a fun meal to cook
						together with your guests. Add 1 cup of frozen peas along with the mussels,
						if you like.
					</Typography>
					<Typography>{(new Date().toISOString().slice(0, 10))}</Typography>
				</CardContent>
			</div>
			<CardActions sx={classes.cardAction}>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
