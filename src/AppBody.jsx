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
    Divider,
    OutlinedInput,
    Checkbox,
} from "@material-ui/core";
import { Add, Close } from "@mui/icons-material";
import data from "./assets/data/data.json";
import management from "./assets/data/management.json";
import AppCard from "./components/AppCard";
import SideBoxCard from "./components/SideBoxCard";

export default function AppBody() {
    // dados da lista principal
    let content = data.data;

    // dados da lista lateral
    let sideContent = management.data[0].boards;

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
        overflow: "hidden",
        "@media screen and (max-width: 400px)": {
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            transform: "translate(0,0)",
            overflow: "auto",
        },
    };

    function confirmBadge(param) {
        let color;
        if (param === true) {
            color = "#65c270";
        } else {
            color = "#707070";
        }
        return (
            <Box
                sx={{
                    fontSize: "9px",
                    color: "#fff",
                    padding: "2px 3px",
                    backgroundColor: color,
                }}
            >
                {param === true ? "CONFIRMADO" : "NÃO CONFIRMADO"}
            </Box>
        );
    }

    // SELECT -----------------------------------------------------------------------------------------------
    const [selectType, setSelectType] = useState([]);
    function handleSelectCheck(e) {
        setSelectType(
            typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
        );
    }

    // DELETE CARD ------------------------------------------------------------------------------------------
    let [deletedIndex, setDeletedIndex] = useState([]);
    function deleteItem(id) {
        setDeletedIndex([...deletedIndex, id]);
    }

    // DELETE SIDEBOX ITEM ----------------------------------------------------------------------------------
    let [deletedSideBoxIndex, setDeletedSideBoxIndex] = useState([]);
    function deleteSideBoxItem(id) {
        setDeletedSideBoxIndex([...deletedSideBoxIndex, id]);
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
                                padding: "16px",
                                boxShadow: "2px 0 10px 0 #ccc",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
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
                            <Close
                                sx={{ cursor: "pointer", fill: "#707070" }}
                                onClick={() => closeGuest()}
                            />
                        </Box>
                        <List sx={{ padding: "16px" }}>
                            {guestData.map((el, i, arr) => {
                                return (
                                    <Box key={i}>
                                        <ListItem
                                            sx={{ padding: "8px 0" }}
                                            secondaryAction={confirmBadge(
                                                el.confirmed_presence
                                            )}
                                        >
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt={el.name}
                                                    src={el.avatar}
                                                    sx={{
                                                        width: "60px",
                                                        height: "60px",
                                                        marginRight: "15px",
                                                    }}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={el.name}
                                                secondary={el.username}
                                            />
                                        </ListItem>
                                        {i === arr.length - 1 ? null : (
                                            <Divider
                                                variant="inset"
                                                component="li"
                                            />
                                        )}
                                    </Box>
                                );
                            })}
                        </List>
                    </Box>
                </Fade>
            </Modal>

            {/* CORPO ----------------------------------------------------------------------------------------------------------------- */}
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
                                    <Select
                                        sx={{ backgroundColor: "white" }}
                                        multiple
                                        value={selectType}
                                        onChange={handleSelectCheck}
                                        input={<OutlinedInput label="Tag" />}
                                        renderValue={(selected) => {
                                            return selected
                                                .map((value) => {
                                                    switch (value) {
                                                        case "event":
                                                            value = "Evento";
                                                            break;
                                                        case "release":
                                                            value =
                                                                "Comunicado";
                                                            break;
                                                        case "publication":
                                                            value =
                                                                "Publicação";
                                                            break;
                                                    }
                                                    return value;
                                                })
                                                .join(", ");
                                        }}
                                    >
                                        <MenuItem value="release">
                                            <Checkbox
                                                checked={
                                                    selectType.indexOf(
                                                        "release"
                                                    ) > -1
                                                }
                                            />
                                            <ListItemText primary="Comunicado" />
                                        </MenuItem>
                                        <MenuItem value="event">
                                            <Checkbox
                                                checked={
                                                    selectType.indexOf(
                                                        "event"
                                                    ) > -1
                                                }
                                            />
                                            <ListItemText primary="Evento" />
                                        </MenuItem>
                                        <MenuItem value="publication">
                                            <Checkbox
                                                checked={
                                                    selectType.indexOf(
                                                        "publication"
                                                    ) > -1
                                                }
                                            />
                                            <ListItemText primary="Publicação" />
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
                                if (!deletedIndex.includes(el.id)) {
                                    if (selectType.length === 0) {
                                        return (
                                            <AppCard
                                                key={i}
                                                el={el}
                                                openGuest={openGuest}
                                                deleteItem={deleteItem}
                                            />
                                        );
                                    } else {
                                        if (selectType.includes(el.type)) {
                                            return (
                                                <AppCard
                                                    key={i}
                                                    el={el}
                                                    openGuest={openGuest}
                                                    deleteItem={deleteItem}
                                                />
                                            );
                                        }
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
                        <Box sx={{ marginTop: "20px" }}>
                            <Box
                                sx={{
                                    backgroundColor: "#fff",
                                    boxShadow: "2px 0 10px 0 #ccc",
                                    borderRadius: "4px",
                                    padding: "12px 8px",
                                }}
                            >
                                <Typography variant="h4" color="textPrimary">
                                    Quadros de Gestão à Vista
                                </Typography>
                                {sideContent.map((el, i) => {
                                    if (!deletedSideBoxIndex.includes(el.title)) {
                                        return <SideBoxCard key={i} el={el} del={deleteSideBoxItem} />;
                                    }
                                })}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
