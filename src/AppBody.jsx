import React, { useState } from 'react'
import { Box, Grid, Container, Typography, Button, FormControl, InputLabel, Select, MenuItem, Card, CardContent, IconButton, Menu } from '@material-ui/core'
import { Add, MoreHoriz } from '@mui/icons-material';
import Badge from './components/Badge';

export default function AppBody() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Container maxWidth="xl" sx={{padding: '24px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={9}> {/* ESQUERDA */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '20px'
                            }}
                        >
                            <Typography variant="h2" color="textPrimary">Endomarketing</Typography>
                            <Box sx={{ display: 'flex', gap: '15px' }}>
                                <FormControl size="small" sx={{ minWidth: '120px' }}>
                                    <InputLabel>Tipo</InputLabel>
                                    {/* https://v5-0-6.mui.com/pt/components/selects/ - LINK PARA SELEÇÃO */}
                                    <Select
                                        label="Tipo"
                                        sx={{backgroundColor: 'white'}}
                                    >
                                        <MenuItem value="">
                                            <em>Nenhum</em>
                                        </MenuItem>
                                        <MenuItem value="com">Comunicado</MenuItem>
                                        <MenuItem value="eve">Evento</MenuItem>
                                        <MenuItem value="pub">Publicação</MenuItem>
                                    </Select>
                                </FormControl>
                            <Button variant="contained" endIcon={<Add />}>Criar</Button>
                            </Box>
                        </Box>
                        {/* MAP */}
                        <Box mt={2} sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <Card>
                                <CardContent
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '16px !important'
                                    }}
                                >
                                    <Box sx={{display: 'flex', gap: '16px'}}>
                                        <Box
                                            sx={{
                                                backgroundColor: '#ccc',
                                                width: '100px',
                                                height: '100px'
                                            }}
                                        ></Box>
                                        <Box>
                                            <Typography variant="h4">Título do card</Typography>
                                            <Box>
                                                <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                                    <Badge text="COMUNICADO" color="#1976d2" />
                                                    <Typography>13 DE OUT</Typography>
                                                </Box>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                                            </Box>
                                        </Box>
                                    </Box>
                                    {/* https://v5-0-6.mui.com/pt/components/menus/ - LINK PARA MENU */}
                                    <IconButton
                                        sx={{ backgroundColor: '#dbdbdb' }}
                                        id="basic-button"
                                        aria-controls="basic-menu"
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <MoreHoriz sx={{fill: '#707070'}} />
                                    </IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>Excluir</MenuItem>
                                    </Menu>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}> {/* DIREITA */}
                        <Box sx={{backgroundColor: '#FFF2DE', border: '1px solid #DCD1C0', padding: '30px 20px'}}>
                            <Typography variant="h4" color="textPrimary">Endomarketing</Typography>
                            <Typography color="textPrimary" sx={{margin: '15px 0'}}>Endomarketing está relacionado às
                            ações de treinamento ou qualificação
                            dos colaboradores da empresa
                            visando um melhor serviço para o
                            cliente. Marketing interno, devido ao
                            nome, é usualmente confundido com
                            Endomarketing mesmo sendo
                            conceitos diferentes.</Typography>
                            <Button variant="outlined" color="dark">Dispensar</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}