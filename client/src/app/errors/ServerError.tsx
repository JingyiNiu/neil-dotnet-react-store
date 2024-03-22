import { Container, Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const ServerError = () => {
  const { state } = useLocation();

  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography gutterBottom variant="h4" color="secondary" style={{ paddingTop: "20px" }}>
            {state.error.title}
          </Typography>
          <Divider />
          <Typography variant="body1" style={{ padding: "20px" }}>
            {state.error.detail || "Internal Server Error"}
          </Typography>
        </>
      ) : (
        <Typography gutterBottom variant="h4" color="secondary">
          Server error
        </Typography>
      )}
    </Container>
  );
};

export default ServerError;
