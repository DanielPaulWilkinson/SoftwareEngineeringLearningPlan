import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Container, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import internal from "stream";

const CompetencyBox = ({ category }: any) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="./images/logo.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {category.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => navigate("/Competency/" + category.id)}
        >
          Competency
        </Button>
        <Button
          size="small"
          onClick={() => navigate("/Analysis/" + category.id)}
        >
          Analysis
        </Button>
        <Button
          size="small"
          onClick={() => navigate("/Updates/" + category.id)}
        >
          Updates
        </Button>
      </CardActions>
    </Card>
  );
};
export default CompetencyBox;
