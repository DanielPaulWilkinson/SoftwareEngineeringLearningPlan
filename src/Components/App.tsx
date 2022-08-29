import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Code, Home } from "@mui/icons-material";
import AdbIcon from "@mui/icons-material/Adb";
import CategoryBoxes from "./CategoryBoxes/CategroyBoxes";
import Competencies from "./Competencies";
import NotFound from "./Common/NotFound";

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <nav>
              <Button>
                <Link to="/">Development Plan</Link>
              </Button>
              <Button>
                <Link to="/Competency">Competency</Link>
              </Button>
              <Button>
                <Link to="/Analysis">Analysis</Link>
              </Button>
              <Button>
                <Link to="/Updates">Updates</Link>
              </Button>
            </nav>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <h1>Welcome, Dan</h1>
        <p>What are we going to work on today?</p>
      </Container>
      <Routes>
        <Route path={"/"} element={<CategoryBoxes />} />
        <Route path={"/Competency"} element={<Competencies />} />
        <Route path={"/Competency/:id"} element={<Competencies />} />
        <Route path={"/Analysis"} element={<Competencies />} />
        <Route path={"/Analysis/:id"} element={<Competencies />} />
        <Route path={"/Updates"} element={<Competencies />} />
        <Route path={"/Updates/:id"} element={<Competencies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <br />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <nav>
              <Button>
                <Link to="/">Development Plan</Link>
              </Button>
              <Button>
                <Link to="/Competency">Competency</Link>
              </Button>
              <Button>
                <Link to="/Analysis">Analysis</Link>
              </Button>
              <Button>
                <Link to="/Updates">Updates</Link>
              </Button>
            </nav>
          </Toolbar>
        </Container>
      </AppBar>
    </BrowserRouter>
  );
}

export default App;
