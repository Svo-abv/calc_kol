import { AppBar, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

const NavigationBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem><Link href="/" underline="none" color="black">Калькулятор</Link></MenuItem>
                        <MenuItem><Link href="/FoodConsumption" underline="none" color="black">Нормы потребления</Link></MenuItem>
                        <MenuItem><Link href="/ProductDictionary" underline="none" color="black">Справочник питания</Link></MenuItem>
                        <MenuItem><Link href="/About" underline="none" color="black">О программе</Link></MenuItem>
                    </Menu>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        {document.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default NavigationBar;