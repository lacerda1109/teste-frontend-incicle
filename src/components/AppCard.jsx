import React, { useState } from "react";
import {
    Box,
    Typography,
    MenuItem,
    Card,
    CardContent,
    IconButton,
    Menu,
    Link,
} from "@material-ui/core";
import { MoreHoriz } from "@mui/icons-material";
import Badge from "./Badge";

export default function AppCard({ el, openGuest, deleteItem }) {
    // DELETE MENU ------------------------------------------------------------------------------------------
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        deleteItem(el.id)
        setAnchorEl(null);
    };
    
    // DATA HANDLING FUNCTIONS ------------------------------------------------------------------------------
    function badgeType(type) {
        let color;
        switch (type) {
            case "event":
                color = "#EE8686";
                break;
            case "release":
                color = "#3489B1";
                break;
            case "publication":
                color = "#707070";
                break;
        }

        return (
            <Box sx={{ marginRight: "10px" }}>
                <Badge text={type.toUpperCase()} color={color} />
            </Box>
        );
    }

    function confirmations(arr) {
        let confirmed = arr.filter((e) => {
            if (e.confirmed_presence === true) {
                return e;
            }
        });

        let str = `${confirmed.length} ${
            confirmed.length === 1 ? "CONFIRMAÇÃO" : "CONFIRMAÇÕES"
        } DE ${arr.length}`;

        return str;
    }

    return (
        <>
            <Card sx={{ borderRadius: "0", boxShadow: "2px 0 10px 0 #ccc" }}>
                <CardContent
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px !important",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: "16px",
                            width: "100%",
                            "@media screen and (max-width: 700px)": {
                                flexDirection: "column",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: "100px",
                                height: "100px",
                                backgroundImage: `url(${el.file.url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                flexShrink: 0,
                                "@media screen and (max-width: 700px)": {
                                    width: "80%",
                                    paddingTop: "50%",
                                    margin: "auto",
                                },
                                "@media screen and (max-width: 400px)": {
                                    width: "100%",
                                },
                            }}
                        ></Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                width: "100%",
                                justifyContent: "space-between",
                                gap: "10px",
                            }}
                        >
                            <Box>
                                <Typography variant="h4">{el.title}</Typography>
                                <Box>
                                    <Box
                                        mt={1}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {badgeType(el.type)}
                                        {el.info.place ? (
                                            <Typography>
                                                {el.info.place} |{" "}
                                            </Typography>
                                        ) : null}
                                        <Typography>{el.info.date}</Typography>
                                        {el.type === "event" ? (
                                            <Typography>
                                                {" "}
                                                |{" "}
                                                <Link
                                                    sx={{ cursor: "pointer" }}
                                                    onClick={() =>
                                                        openGuest(
                                                            el.invited_people
                                                        )
                                                    }
                                                >
                                                    {confirmations(
                                                        el.invited_people
                                                    )}
                                                </Link>
                                            </Typography>
                                        ) : null}
                                    </Box>
                                    <Typography mt={1}>
                                        {el.description}
                                    </Typography>
                                </Box>
                            </Box>
                            <IconButton
                                sx={{
                                    backgroundColor: "#dbdbdb",
                                }}
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                                onClick={handleClick}
                            >
                                <MoreHoriz sx={{ fill: "#707070" }} />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    Excluir
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}
