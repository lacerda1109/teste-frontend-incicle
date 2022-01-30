import React, { useState } from "react";
import {
    Box,
    Grid,
    Container,
    Typography,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Modal,
    Fade,
    Backdrop,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider
} from "@material-ui/core";
import { Add, Close } from "@mui/icons-material";
import data from "./assets/data/data.json";
import AppCard from './components/AppCard'
import SideBox from './components/SideBox'

export default function AppBody() {
    let content = data.data

    // SELECT -----------------------------------------------------------------------------------------------
    const [selectValue, setSelectValue] = useState("");
    function handleSelect(e) {
        setSelectValue(e.target.value);
    }
    
    // GUEST LIST MODAL -------------------------------------------------------------------------------------
    const [guestModal, setGuestModal] = useState(false);
    const [guestData, setGuestData] = useState([]);
    function openGuest(arr) {
        setGuestData(arr);
        setGuestModal(true);
    }
    function closeGuest() {
        setGuestModal(false);
    }

    const guestModalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        backgroundColor: "#fff",
        outline: 0,
        overflow: 'hidden',
        "@media screen and (max-width: 400px)": {
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            transform: 'translate(0,0)',
            overflow: 'auto'
        }
    };

    function confirmBadge(param) {
        let color
        if (param === true) {
            color = '#65c270'
        } else { color = '#707070' }
        return (
            <Box
                sx={{
                    fontSize: '9px',
                    color: '#fff',
                    padding: '2px 3px',
                    backgroundColor: color
                }}
            >
                {param === true ? 'CONFIRMADO' : 'NÃO CONFIRMADO'}
            </Box>
        )
    }

    return (
        <Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={guestModal}
                onClose={closeGuest}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={guestModal}>
                    <Box sx={{ ...guestModalStyle }}>
                        <Box
                            sx={{
                                padding: '16px',
                                boxShadow: "2px 0 10px 0 #ccc",
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                id="transition-modal-title"
                                variant="h4"
                                component="h4"
                                color="textPrimary"
                            >
                                Convidados
                            </Typography>
                            <Close sx={{cursor: 'pointer', fill: '#707070'}} onClick={() => closeGuest()} />
                        </Box>
                        <List sx={{padding: '16px'}}>
                            {guestData.map((el, i, arr) => {
                                return (
                                    <Box key={i}>
                                    <ListItem
                                        sx={{padding: '8px 0'}}
                                        secondaryAction={confirmBadge(el.confirmed_presence)}
                                    >
                                        <ListItemAvatar>
                                            <Avatar
                                                alt={el.name}
                                                src={el.avatar}
                                                sx={{
                                                    width: "60px",
                                                    height: "60px",
                                                    marginRight: '15px'
                                                }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={el.name}
                                            secondary={el.username}
                                        />
                                    </ListItem>
                                    {i === (arr.length - 1) ? null : (<Divider variant="inset" component="li" />)}
                                    </Box>
                                );
                            })}
                        </List>
                    </Box>
                </Fade>
            </Modal>

            <Container maxWidth="xl" sx={{ padding: "24px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} lg={9}>
                        {" "}
                        {/* ESQUERDA */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "20px",
                            }}
                        >
                            <Typography variant="h2" color="textPrimary">
                                Endomarketing
                            </Typography>
                            <Box sx={{ display: "flex", gap: "15px" }}>
                                <FormControl
                                    size="small"
                                    sx={{ minWidth: "120px" }}
                                >
                                    <InputLabel>Tipo</InputLabel>
                                    {/* https://v5-0-6.mui.com/pt/components/selects/ - LINK PARA SELEÇÃO */}
                                    <Select
                                        label="Tipo"
                                        sx={{ backgroundColor: "white" }}
                                        value={selectValue}
                                        onChange={handleSelect}
                                    >
                                        <MenuItem value="">
                                            <em>Nenhum</em>
                                        </MenuItem>
                                        <MenuItem value="release">
                                            Comunicado
                                        </MenuItem>
                                        <MenuItem value="event">
                                            Evento
                                        </MenuItem>
                                        <MenuItem value="publication">
                                            Publicação
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                                <Button variant="contained" endIcon={<Add />}>
                                    Criar
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            mt={2}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            {content.map((el, i) => {
                                if (selectValue === "") {
                                    return <AppCard el={el} i={i} openGuest={openGuest} />
                                } else {
                                    if (el.type === selectValue) {
                                        return <AppCard el={el} i={i} openGuest={openGuest} />
                                    }
                                }
                            })}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        {" "}
                        {/* DIREITA */}
                        <Box
                            sx={{
                                backgroundColor: "#FFF2DE",
                                border: "1px solid #DCD1C0",
                                padding: "30px 20px",
                            }}
                        >
                            <Typography variant="h4" color="textPrimary">
                                Endomarketing
                            </Typography>
                            <Typography
                                color="textPrimary"
                                sx={{ margin: "15px 0" }}
                            >
                                Endomarketing está relacionado às ações de
                                treinamento ou qualificação dos colaboradores da
                                empresa visando um melhor serviço para o
                                cliente. Marketing interno, devido ao nome, é
                                usualmente confundido com Endomarketing mesmo
                                sendo conceitos diferentes.
                            </Typography>
                            <Button variant="outlined" color="dark">
                                Dispensar
                            </Button>
                        </Box>
                        <Box sx={{marginTop: '20px'}}>
                            <SideBox />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
