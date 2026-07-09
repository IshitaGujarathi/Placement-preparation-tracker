import {
    Box,
    CircularProgress
} from "@mui/material";

const Loader = () => {

    return (

        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mt: 10
            }}
        >

            <CircularProgress />

        </Box>

    );

};

export default Loader;