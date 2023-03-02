import {
  Box,
  Container,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LaptopIcon from '@mui/icons-material/Laptop';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Link from 'next/link';
type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const [menuMobile, setMenuMobile] = useState(false);
  const [menuOptSelected, setMenuOptSelected] = useState(0);

  const handleMenuMobile = () => {
    setMenuMobile((pastVal) => !pastVal);
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setMenuOptSelected(index);
  };
  return (
    <main
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        paddingTop: '10px',
      }}
    >
      <Container>
        <Grid item xs={12}>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Stack>
              <Typography fontSize={24} fontWeight="bold" color={'primary'}>
                ElvisDev
              </Typography>
              <Typography
                textAlign={'center'}
                fontSize={12}
                typography={'p'}
                color="primary.light"
              >
                Resources
              </Typography>
            </Stack>

            <IconButton onClick={handleMenuMobile}>
              {menuMobile ? (
                <CloseIcon fontSize="large" color="primary" />
              ) : (
                <MenuIcon fontSize="large" color="primary" />
              )}
            </IconButton>
          </Toolbar>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>

      {/* Mobile Menu */}
      <Slide direction="left" in={menuMobile} mountOnEnter unmountOnExit>
        <Box
          position={'fixed'}
          top={0}
          height={'100vh'}
          width={'75vw'}
          right={0}
          zIndex={2}
          bgcolor={'#013C35'}
        >
          <Box>
            <IconButton onClick={handleMenuMobile}>
              <CloseIcon fontSize="large" color="primary" />
            </IconButton>
          </Box>
          <List sx={{ color: 'white' }} component={'nav'}>
            <Link
              style={{ textDecoration: 'none', color: 'currentcolor' }}
              href={'/'}
            >
              <ListItemButton
                selected={menuOptSelected === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <HomeOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: 'currentcolor' }}
              href={'/frontend'}
            >
              <ListItemButton
                selected={menuOptSelected === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <LaptopIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Frontend" />
              </ListItemButton>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: 'currentcolor' }}
              href={'/backend'}
            >
              <ListItemButton
                selected={menuOptSelected === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemIcon>
                  <DataObjectIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Backend" />
              </ListItemButton>
            </Link>

            <Link
              style={{ textDecoration: 'none', color: 'currentcolor' }}
              href={'/design'}
            >
              <ListItemButton
                selected={menuOptSelected === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemIcon>
                  <PaletteOutlinedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Design" />
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </Slide>
    </main>
  );
}
