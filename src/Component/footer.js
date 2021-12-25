import React from 'react'
import { AppBar, Container, Toolbar, Typography, Link } from "@mui/material"

function Footer() {
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="md">
                <Toolbar>
                    <Typography variant="body1" color="inherit">
                        created by <Link href='https://github.com/oura-hideyoshi' color={"#FFF"}>とまとみ</Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer
