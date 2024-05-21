import { Button, Grid, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { setProductParams } from "./catalogSlice";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const ProductSearch = () => {
  const { productParams } = useAppSelector((state) => state.catalog);
  const [searchTerm, setSearchTerm] = useState(productParams.searchTerm);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(setProductParams({ searchTerm: searchTerm }));
  };

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="stretch">
      <Grid item>
        <TextField
          size="small"
          label="Search products"
          variant="outlined"
          fullWidth
          value={searchTerm || ""}
          onChange={(event: any) => {
            setSearchTerm(event.target.value);
          }}
        />
      </Grid>
      <Grid item style={{ display: "flex" }}>
        <Button color="secondary" variant="contained" onClick={handleSubmit}>
          <SearchIcon />
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductSearch;
