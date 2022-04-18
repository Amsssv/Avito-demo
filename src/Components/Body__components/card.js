import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { Checkbox, createTheme, Grid } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const customTheme = createTheme({
	card: {
		display: 'flex',
		mt: 2,
	},
	cardMedia: {
		width: 300
	},
	cardAction: {
		alignItems: 'flex-start'
	},
	date: {
		mt: 1
	},
})

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
				<CardContent >
					<Grid
						container
						justifyContent="space-between"
						alignItems="top"
						spacing={2}>
						<Grid item xs={9}>
							<Typography gutterBottom variant="h5" >
								Longboard
							</Typography>
						</Grid>
						<Grid item xs={3}>
							<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
							<IconButton aria-label="share">
								<ShareIcon />
							</IconButton>
						</Grid>
					</Grid>
					<Typography variant="h6" id='price'>$ 1200</Typography>
					<Typography color="text.secondary">
						This impressive paella is a perfect party dish and a fun meal to cook
						together with your guests. Add 1 cup of frozen peas along with the mussels,
						if you like.
					</Typography>
					<Typography sx={classes.date}>{(new Date().toISOString().slice(0, 10))}</Typography>
				</CardContent>
			</div>
		</Card >
	);
}
