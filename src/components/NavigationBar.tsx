import { AppBar, IconButton, Link, Paper, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const NavigationBar = () => {

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
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link href="/About">О программе</Link>
                    <Link href="/FoodConsumption">Нормы потребления</Link>
                    <Link href="/ProductDictionary">Справочник питания</Link>
                </Toolbar>
            </AppBar>

        </div>

    )
}

export default NavigationBar;