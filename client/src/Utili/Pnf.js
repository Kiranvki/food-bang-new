import React from 'react';
import { Box, List, ListItemText, Button, Stack } from "@mui/material";
import { Separator } from '../styles/theme';

function Pnf() {
    return (
        <Stack>
            <Separator />
            <div>
                <video
                    width="100%"
                    height="580"
                    src={`https://cdn.dribbble.com/users/167575/videos/13115/comp_2_1.mp4`}
                    frameBorder="0"
                    allowFullScreen
                    title="404 Error"
                    loop
                    autoPlay
                    muted
                    playsInline
                />
            </div>

        </Stack>
    );
}

export default Pnf;
