import { useEffect } from "react";
import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchFilters, fetchProductsAsync, productSelectors } from "./catalogSlice";
import { Grid, Paper } from "@mui/material";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../../app/components/RadioGroupButtons";
import CheckboxButtons from "../../app/components/CheckBoxButtons";
import AppPagination from "../../app/components/AppPagination";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price - High to low" },
  { value: "price", label: "Price - Low to high" },
];

const Catalog = () => {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, filtersLoaded, types, brands, productParams, metaData } = useAppSelector(
    (state) => state.catalog
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded]);

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded]);

  if (!filtersLoaded) return <LoadingComponent message="Loading products..." />;

  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={3}>
        <Paper sx={{ mb: 2 }}>
          <ProductSearch />
        </Paper>
        <Paper sx={{ p: 2, mb: 2 }}>
          <RadioButtonGroup
            selectedValue={productParams.orderBy}
            options={sortOptions}
            onChange={(e) => console.log(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: 2, mb: 2 }}>
          <CheckboxButtons items={brands} checked={productParams.brands} onChange={(value) => console.log(value)} />
        </Paper>
        <Paper sx={{ p: 2 }}>
          <CheckboxButtons items={types} checked={productParams.types} onChange={(value) => console.log(value)} />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <ProductList products={products} />
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={9} sx={{ mb: 2, mt: 2 }}>
        {metaData && <AppPagination metaData={metaData} onPageChange={(value) => console.log(value)} />}
      </Grid>
    </Grid>
  );
};

export default Catalog;
