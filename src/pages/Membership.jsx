import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';
import { Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";

const Membership = ({ user }) => {
    // const pakage1 = {
    //     price: '$99',
    //     rank: 'basic'
    // }
    // const pakage2 = {
    //     price: '$199',
    //     rank: 'platinum'
    // }
    // const pakage3 = {
    //     price: '$499',
    //     rank: 'premium'
    // }
    const savePakageDetails = (pakageDetails) => {

    }
    const [togglePayform, setTogglePayform] = useState(false);
    return (<Stack direction='row' sx={{ backgroundColor: '#7f5a83', backgroundImage: 'linear-gradient(315deg, #7f5a83 0%, #0d324d 74%)' }}>
        <Sidebar />
        <Stack direction='column' justifyContent={"center"} alignItems='center' width='100%' color='#fff' minHeight='100vh'>
            <Typography variant="h3" fontWeight='bold' color='#fff0f5' mt={16}>Our Membership Plans</Typography>
            <Typography variant="body1" fontSize={14} mt={3}>
                Thank you for logging in! To purchase a membership, please select one of the options below:
            </Typography>
            <Stack direction={"row"} justifyContent='space-evenly' width='90%'>
                <Stack direction='column' justifyContent='center' mt={8} alignItems='center' maxWidth='350px' textAlign='center' px={10} py={7} sx={{ ':hover': { transform: 'scale(1.02)' }, transition: '0.5s', background: 'linear-gradient(to top, #0d324d -4.3%, rgb(122, 101, 149) 101.8%)', borderRadius: '30px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', cursor: 'pointer' }}>
                    <Typography variant="h1" color='#0d34d' fontWeight='bold'>$99</Typography>
                    <Typography variant="h4" fontWeight='bold' mt={3}>Basic</Typography>
                    <Typography maxWidth='120px' mt={2}>In this pakage you will be able to access a total of 5 sites</Typography>
                    <Button variant="contained" sx={{ ':hover': { backgroundColor: '#6f2da8' }, py: '10px', px: '40px', backgroundColor: '#69359c', borderRadius: '15px', mt: '40px' }} onClick={() => savePakageDetails()}>Subscribe</Button>
                </Stack>
                <Stack direction='column' justifyContent='center' mt={8} alignItems='center' maxWidth='350px' textAlign='center' px={7} py={7} sx={{ ':hover': { transform: 'scale(1.02)' }, transition: '0.5s', background: 'linear-gradient(to top, #0d324d -4.3%, rgb(122, 101, 149) 101.8%)', borderRadius: '30px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', cursor: 'pointer' }}>
                    <Typography variant="h1" color='#0d34d' fontWeight='bold'>$199</Typography>
                    <Typography variant="h4" fontWeight='bold' mt={3}>Platinum</Typography>
                    <Typography maxWidth='120px' mt={2}>In this pakage you will be able to access a total of 10 sites</Typography>
                    <Button variant="contained" sx={{ ':hover': { backgroundColor: '#6f2da8' }, py: '10px', px: '40px', backgroundColor: '#69359c', borderRadius: '15px', mt: '40px' }} onClick={() => savePakageDetails()}>Subscribe</Button>
                </Stack>
                <Stack direction='column' justifyContent='center' mt={8} alignItems='center' maxWidth='350px' textAlign='center' px={7} py={7} sx={{ ':hover': { transform: 'scale(1.02)' }, transition: '0.5s', background: 'linear-gradient(to top, #0d324d -4.3%, rgb(122, 101, 149) 101.8%)', borderRadius: '30px', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', cursor: 'pointer' }}>
                    <Typography variant="h1" color='#0d34d' fontWeight='bold'>$499</Typography>
                    <Typography variant="h4" fontWeight='bold' mt={3}>Premium</Typography>
                    <Typography maxWidth='120px' mt={2}>In this pakage you will be able to access a total of 50 sites</Typography>
                    <Button variant="contained" sx={{ ':hover': { backgroundColor: '#6f2da8' }, py: '10px', px: '40px', backgroundColor: '#69359c', borderRadius: '15px', mt: '40px' }} onClick={() => savePakageDetails()}>Subscribe</Button>
                </Stack>
            </Stack>

        </Stack>
    </Stack>)
}

export default Membership;