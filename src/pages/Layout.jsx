import { Outlet, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

const Layout = () => {
    return (
        <>
            <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0 }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            transition: 'font-size 0.2s ease-in-out',
                            '&:hover': { fontSize: '1.5rem' }
                        }}
                    >
                        Vladislav site
                    </Typography>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/Home"
                        sx={{ transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.2)' } }}
                    >
                        Home
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                        sx={{ transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.2)' } }}
                    >
                        Main Page
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/Profile"
                        sx={{ transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.2)' } }}
                    >
                        Profile
                    </Button>


                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 8 }}>
                <Outlet />
            </Container>
        </>
    );
};

export default Layout;
