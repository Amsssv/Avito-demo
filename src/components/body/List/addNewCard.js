import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import NewCardForm from './new card components/newCardForm';
import {useToggle} from "../../../hooks";

export default function AddNewCard() {
    const [open, toggle] = useToggle();

    return(
        <>
            <div >
                <Fab onClick={toggle} size="medium" color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
            <NewCardForm
                open={open}
                onClose={toggle}
            />
        </>
    )

}

