import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { setBasket } = useStoreContext();
  const [loading, setLoading] = useState(false);

  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Basket.addItem(productId)
      .then((basket) => setBasket(basket))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "secondary.light" }}>{product.name.charAt(0).toUpperCase()}</Avatar>}
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />
      <CardMedia
        sx={{ height: 140, backgroundSize: "contain", bgcolor: "primary.light" }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary.main" variant="h5" component="div">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton
          variant="contained"
          disableElevation
          size="small"
          loading={loading}
          onClick={() => handleAddItem(product.id)}
        >
          Add to Cart
        </LoadingButton>
        <Button variant="outlined" size="small" component={Link} to={`/catalog/${product.id}`}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
