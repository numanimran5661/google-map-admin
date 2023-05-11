import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Stack } from "@mui/material";
import Header from "../components/Header";

const Membership = ({ user }) => {
    const [ togglePayform, setTogglePayform ] = useState(false);
    return (<>
    <Header />
        <Stack direction='column' alignItems='center' color='#fff' minHeight='100vh' sx={{ backgroundColor: '#7f5a83', backgroundImage: 'linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)'}}>
            <Typography variant="h4" mt={16}>Our Membership Plans</Typography>
            <Typography variant="body1" fontSize={13} mt={3}>
                Thank you for logging in! To purchase a membership, please select one of the options below:
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: '3rem'}} onClick={() => console.log('purchase successfull')}>
                Basic Membership - $99 for 10 sites
            </Button>
            <Button variant="contained" color="primary" sx={{ mt: '2rem'}} onClick={() => console.log('You have purchased the Premium Membership!')}>
                Premium Membership - $199 for 10 sites
            </Button>
            <Button variant="contained" color="primary" sx={{ mt: '2rem'}} onClick={() => console.log('You have purchased the Premium Membership!')}>
                VIP Membership - $499 for 50 sites
            </Button>

        </Stack>
    </>)
}

export default Membership;