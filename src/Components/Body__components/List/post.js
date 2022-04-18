import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { Checkbox, Grid } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Post() {

	return (
		<Card sx={{
			display: 'flex',
			mt: 2,
		}}>
			<CardMedia
				sx={{ width: 300 }}
				component="img"
				image="https://68.img.avito.st/208x156/13363088268.jpg"
			/>
			<CardContent >
				<Grid
					container
					justifyContent="space-between"
					alignItems="top"
				>
					<Grid item xs={3}>
						<Typography gutterBottom variant="h5" >
							Longboard
						</Typography>
					</Grid>
					<Grid item >
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
				<Typography sx={{ mt: 1 }}>{(new Date().toISOString().slice(0, 10))}</Typography>
			</CardContent>
		</Card >
	);
}
