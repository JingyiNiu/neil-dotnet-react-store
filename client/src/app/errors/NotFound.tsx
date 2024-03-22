import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container component={Paper} sx={{ height: 400 }} style={{ paddingTop: "20px" }}>
      <Typography gutterBottom variant={"h4"}>
        Oops - we could not find what your are looking for!
      </Typography>
      <Divider />
      <Button component={Link} to="/catalog" fullWidth>
        Go back to shop
      </Button>
    </Container>
  );
};

export default NotFound;
