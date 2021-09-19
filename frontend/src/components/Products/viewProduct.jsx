import React, { useParams } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Icon,
  Button,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles";

function ViewProduct() {
  console.log(window.location.pathname);
  var initial_url = window.location.pathname;

  var splitURL = initial_url.split("/");
  var productID = splitURL[2];
  const products = useSelector((state) => state.allProducts.products);
  return (
    <div>
      <Card key={""}>
        <Typography style={{ marginTop: "100px" }}>
          {products[productID].title}
        </Typography>
        <img src={products[productID].image}></img>
      </Card>
    </div>
  );
}

export default ViewProduct;
