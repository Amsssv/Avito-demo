import React from 'react';
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


const menuItems = ['Inbox', 'Starred', 'Send email', 'Drafts', 'All mail', 'Trash', 'Spam']
const menuItemIcons = [<AllInboxIcon/>, <StarIcon/>, <SendIcon/>, <DraftsIcon/>, <MailIcon/>, <DeleteIcon/>,
    <InfoIcon/>]

export default function SideBar() {
    return (
        <>
            <List>
                {menuItems.map((menuItem, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>
                            {menuItemIcons[index]}
                        </ListItemIcon>
                        <ListItemText primary={menuItem}/>
                    </ListItem>
                ))}
            </List>
        </>
    )
}