import { LockOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Container, Paper, Avatar, Typography, Box, TextField, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { FieldValues, useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const submitForm = async (data: FieldValues) => {
    await agent.Account.login(data);
  };

  return (
    <Container
      component={Paper}
      maxWidth="sm"
      sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{ mt: 1 }}>
        <TextField {...register("email")} margin="normal" fullWidth label="Email" autoComplete="email" autoFocus />
        <TextField
          {...register("password")}
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <LoadingButton loading={isSubmitting} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign In
        </LoadingButton>
        <Grid container>
          <Grid item>
            <Link to="/register" style={{ textDecoration: "none" }}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
