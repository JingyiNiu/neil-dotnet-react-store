import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface Props {
  message?: string;
}

const LoadingComponent = ({ message = "Loading..." }: Props) => {
  return (
    <Backdrop open={true} invisible={true}>
      <Box alignItems="center" display="flex" justifyContent="center" height="100vh" width="100vw">
        <CircularProgress size={100} color="secondary" />
        <Typography variant="h6" sx={{ justifyContent: "center", position: "fixed", top: "60%" }}>
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
};

export default LoadingComponent;
