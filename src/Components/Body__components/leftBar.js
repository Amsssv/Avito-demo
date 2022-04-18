import * as React from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import StarIcon from '@mui/icons-material/Star';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { createTheme } from "@mui/material/node_modules/@mui/system";


const menuBar = ['Inbox', 'Starred', 'Send email', 'Drafts', 'All mail', 'Trash', 'Spam']
const iconMenuBar = [<AllInboxIcon />, <StarIcon />, <SendIcon />, <DraftsIcon />, <MailIcon />, <DeleteIcon />, <InfoIcon />]

const customTheme = createTheme({
	drawer: {
		'& .MuiDrawer-paper': {
			width: 240,
			boxSizing: 'border-box',
			position: 'static',
			border: 'none',
		},
		display: {
			xs: 'none',
			md: 'block'
		}
	},
	control: {
		marginBottom: 2
	},
	submit: {
		mt: 2,
		mr: 1.5,
	}
})

export default function LeftBar() {

	const classes = customTheme

	const [values, setValues] = React.useState({
		priceStart: '',
		priceEnd: '',
	});

	const handleChange = (prop) => (event) => {
		const re = /^[0-9\b]+$/;
		if (event.target.value === '' || re.test(event.target.value)) {
			setValues({ ...values, [prop]: event.target.value });
		}
	};

	return (
		<React.Fragment >
			<Drawer variant="permanent" anchor="left" sx={classes.drawer}>
				<List>
					{menuBar.map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{iconMenuBar[index]}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<div >
					<FormControl sx={classes.control}>
						<InputLabel htmlFor="lowest-price">Lowest</InputLabel>
						<OutlinedInput
							id="lowest-price"
							value={values.priceStart}
							onChange={handleChange('priceStart')}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
							label="Lowest"
							placeholder='100'
						/>
					</FormControl>
					<FormControl >
						<InputLabel htmlFor="highest-price">Highest</InputLabel>
						<OutlinedInput
							id="highest-price"
							value={values.priceEnd}
							onChange={handleChange('priceEnd')}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
							label="Highest"
							placeholder='1000'
						/>
					</FormControl>
				</div>
				<Button variant="contained" sx={classes.submit}>Apply</Button>
			</Drawer>
		</React.Fragment >
	);

}