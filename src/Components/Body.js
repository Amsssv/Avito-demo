import * as React from 'react';
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function Main() {

	const [values, setValues] = React.useState({
		amount: '',
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	return (
		<React.Fragment >
			<Drawer
				variant="permanent"
				anchor="left"
				sx={{
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
						position: 'static',
						border: 'none',
					},
				}}>
				<List>
					{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<div>
					<FormControl sx={{ m: 1 }}>
						<InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
						<OutlinedInput
							id="outlined-adornment-amount"
							value={values.amount}
							onChange={handleChange('amount')}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
							label="Amount"
						/>
					</FormControl>
					<FormControl sx={{ m: 1 }}>
						<InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
						<OutlinedInput
							id="outlined-adornment-amount"
							value={values.amount}
							onChange={handleChange('amount')}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
							label="Amount"
						/>
					</FormControl>
				</div>
			</Drawer>
		</React.Fragment>
	);

}





