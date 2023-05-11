import { Button, Stack } from '@mui/material'
import React from 'react'

const Header = () => {
    const logoutHandle = () => {
        window.location.reload(false)
    }
  return (
    <Stack position='fixed' right='15px' top='10px'>
        <Button variant='contained' onClick={logoutHandle}>Log Out</Button>
    </Stack>
  )
}

export default Header