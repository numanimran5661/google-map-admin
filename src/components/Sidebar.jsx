import { Box, Stack, Typography, Button } from '@mui/material'
import { useLocation } from 'react-router-dom';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import React, { useState } from 'react'
import WebIcon from '@mui/icons-material/Web';
import { menuOptions1 } from './utils/menuOptions';

const Sidebar = () => {
    const pathName = useLocation()
    const [currentPage, setCurrentPage] = useState(pathName)
    const [activeMenu, setActiveMenu] = useState('Memberships')
    console.log(currentPage);
    return (
        <Stack direction='column' maxWidth='400px' height='100vh' sx={{ backgroundColor: '#27293d', color: '#fff', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}>
            <Stack direction='row' alignItems='center' pl={2} py={4} pr={6}>
                <PersonPinIcon sx={{ fontSize: '80px' }} />
                <Typography variant='h4' fontWeight='bold' fontFamily='revert-layer'>Map Admin</Typography>
            </Stack>
            <Stack>
                <Stack direction='row' mb={2} py={2} pl={3} sx={{ ':hover': { backgroundColor: 'rgba(195, 177, 225, 0.2)' }, cursor: 'pointer', transition: '0.2s' }}>
                    <Box mr={2}><WebIcon/></Box>
                    <Typography fontSize="16px">Create New Site</Typography>
                </Stack>
            </Stack>
            <Stack>
                {
                    currentPage.pathname === '/' && (
                        menuOptions1.map(option => (
                            <Stack direction='row' mb={2} py={2} pl={3} sx={{ ':hover': { backgroundColor: 'rgba(195, 177, 225, 0.2)' }, backgroundColor: option.label === activeMenu && 'rgba(195, 177, 225, 0.3)', cursor: 'pointer', transition: '0.2s' }}>
                                <Box mr={2}>{option.icon}</Box>
                                <Typography fontSize="16px">{option.label}</Typography>
                            </Stack>
                        ))
                    )
                }
            </Stack>
        </Stack>
    )
}

export default Sidebar