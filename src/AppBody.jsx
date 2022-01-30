import React from 'react'
import { Box, Grid, Container, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Add } from '@mui/icons-material';

export default function AppBody() {
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