import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import CategoryBox from "./CategoryBox";

function CategoryBoxes() {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    await fetch(`/Categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      });
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        {categories.map((category: any) => (
          <Grid xs={12}>
            <CategoryBox category={category} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CategoryBoxes;
