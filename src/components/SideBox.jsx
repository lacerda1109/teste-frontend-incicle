import { Box, Typography, MenuItem, IconButton } from "@material-ui/core";
import { Public, MoreHoriz } from "@mui/icons-material";
import management from "../assets/data/management.json";

export default function SideBox() {
    let data = management.data[0].boards;

    function row(el, i) {
        return (
            <Box
                key={i}
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
                        <Box
                            sx={{
                                backgroundColor: "#fff",
                                borderRadius: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "3px",
                                cursor: "pointer",
                            }}
                        >
                            <MoreHoriz
                                sx={{ fill: "#707070", fontSize: "20px" }}
                            />
                        </Box>
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

    return (
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

            {data.map((el, i) => {
                return row(el, i);
            })}
        </Box>
    );
}