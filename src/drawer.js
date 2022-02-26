import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BasicTabs from './tabs';


const drawerWidth = 75;

export default function ButtonAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    //Open/Close side drawer on mobile screen
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar>
                <MenuIcon />
            </Toolbar>
            <Divider />
            <List>
                {['1', '2', '3', '4'].map((text, index) => (
                    <ListItem button key={text} alignItems='center' divider={true}>
                        <ListItemIcon sx={{ color: '#9e36f1', height: '30px', width: '30px' }} alignItems='center'>
                            {index % 2 === 0 ? <InboxIcon sx={{ height: '30px', width: '30px' }} /> : <MailIcon sx={{ height: '30px', width: '30px' }} />}
                        </ListItemIcon>
                        {/* <ListItemText primary={''} /> */}
                    </ListItem>
                ))}
            </List>
        </div>
    );

    //Attach drawer to <body> tag
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100vw - ${drawerWidth}px)`, xs: '100%' },
                        background: '#fff',
                        color: '#333',
                        ml: { sm: `${drawerWidth}px` }
                    }}
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" noWrap component="div">
                            Admin Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/* Drawer */}
                <Box
                    component="nav"
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                        anchor='left'
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                        anchor='right'
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Toolbar />
                <Box mt={1} boxShadow={2} sx={{ height: 'calc(100vh - 65px)', width: { sm: `calc(100vw - ${2*drawerWidth}px)`, xs: '100%' } }} margin={'auto'}>
                    <BasicTabs />
                </Box>
            </Box>
        </>
    );
}