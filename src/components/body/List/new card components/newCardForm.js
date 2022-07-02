import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import {Box, FormControl, InputLabel, OutlinedInput, Stack, TextField} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import {useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from "react-redux";
import {addItem} from "../../../../thunks";
import {styled} from '@mui/material/styles';

const regexp = new RegExp(/^[0-9\b]+$/);
const isValid = value => regexp.test(value);
const isEmpty = (str) => str === '';
const currency = "\u20BD";
const Input = styled('input')({
    display: 'none',
});



export default function NewCardForm(props) {
    const {onClose, open} = props;
    const dispatch = useDispatch();

    const [price, setPrice] = useState(0);
    const [title, setTitle] = useState('Longboard');
    const [data, setData] = useState({})
    const [url, setUrl] = useState(null)
    const [desc, setDesc] = useState('This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.')

    const handleButtonClick = () => {
        dispatch(addItem(title, url, price, desc, data));
        onClose();
    }
    const handlePrice = ({target: {value}}) => isValid(value) && setPrice(value);
    const handleTitle = ({target: {value}}) => setTitle(value);
    const handleDesc = ({target: {value}}) => setDesc(value);

    const showImage = () => {
        let image = document.getElementById('form__image');
        image.width = 200;
        image.height = 200;

        return image;
    }
    const getImageProps = (event) => {
        let file = event.target.files[0];
        let url = event.target.baseURI;
        let imageName = file.name.replaceAll(" ", "");
        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            showImage().src = reader.result;
            setUrl(url + "items/" + imageName);
            setData({
                img: reader.result,
                name: imageName,
            });
        };
    }

    return (
        <Dialog open={open} sx={{textAlign: 'center'}}>
            <Stack sx={{ml: 7}} direction="row" spacing={30}>
                <DialogTitle id="scroll-dialog-title">Add new card</DialogTitle>
                <Button onClick={onClose}>
                    <CloseIcon fontSize="large"/>
                </Button>
            </Stack>
            <div>
                <TextField
                    sx={{m: 2, width: 450}}
                    required
                    id="card-title"
                    label="Card name"
                    value={title}
                    onChange={handleTitle}
                    error={isEmpty(title)}
                />
                <FormControl sx={{m: 2, width: 450}}>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={price}
                        onChange={handlePrice}
                        startAdornment={<InputAdornment position="start">{currency}</InputAdornment>}
                        label="Amount"
                    />
                </FormControl>
                <TextField
                    sx={{m: 2, width: 450}}
                    required
                    multiline
                    rows={4}
                    label="Description"
                    value={desc}
                    onChange={handleDesc}
                    error={isEmpty(desc)}
                />
                <Box sx={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file"
                               onChange={getImageProps}/>
                        <Button variant="contained" component="span" sx={{m: 2}}>
                            Upload image
                        </Button>
                    </label>
                    <img id="form__image"/>
                </Box>
                <Box sx={{m: 2}}>
                    <Button onClick={handleButtonClick} variant="contained" endIcon={<SendIcon/>}>
                        Send
                    </Button>
                </Box>
            </div>
        </Dialog>
    );
}