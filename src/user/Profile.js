import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";

export default function Profile({isAuthenticated}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 700,
          height: 500,
        },
      }}
    >
      <Paper elevation={3} >
        {isAuthenticated().user.name}
      </Paper>
      <Button>Change Password</Button>
    </Box>
  );
}