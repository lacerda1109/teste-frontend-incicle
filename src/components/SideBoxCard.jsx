import React, { useState, useEffect } from "react";
import { Box, Typography, Menu, MenuItem, IconButton } from "@material-ui/core";
import { Public, MoreHoriz } from "@mui/icons-material";

export default function SideBoxCard({ el, del }) {
    // DELETE MENU ------------------------------------------------------------------------------------------
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                backgroundColor: "rgba(66, 135, 245, 0.1)",
                marginTop: "8px",
                padding: "5px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography color="textPrimary">{el.title}</Typography>
                <Box sx={{ display: "flex", gap: "5px" }}>
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "3px",
                        }}
                    >
                        <Public
                            sx={{ fill: "#707070", fontSize: "20px" }}
                        />
                    </Box>
                    <IconButton
                        sx={{
                            backgroundColor: "#fff",
                            width: "27px",
                            height: "27px",
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
                        <MenuItem onClick={() => {
                            handleClose()
                            del(el.title)
                        }}>
                            Excluir
                        </MenuItem>
                    </Menu>
                </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "5px", marginTop: "5px" }}>
                {el.resume_files.map((el, i) => {
                    return (
                        <Box
                            key={i}
                            sx={{
                                backgroundColor: "#ccc",
                                width: "25%",
                                paddingTop: "25%",
                                backgroundImage: `url(${el.file})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></Box>
                    );
                })}
            </Box>
        </Box>
    );
}
