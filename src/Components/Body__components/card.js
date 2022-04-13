import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function Cards() {

	return (
		<Card sx={{
			display: 'flex',
			mt: 2,
		}}>
			<CardMedia
				sx={{
					flexGrow: 0,
					width: 300
				}}
				component="img"
				image="https://68.img.avito.st/208x156/13363088268.jpg"
				alt="Paella dish"
			/>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography color="text.secondary">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests. Add 1 cup of frozen peas along with the mussels,
					if you like.
				</Typography>
			</CardContent>
			<CardActions sx={{ alignItems: 'flex-start', }}>
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
