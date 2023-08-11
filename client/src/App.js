import logo from "./logo.svg";
import "./App.css";
import DenseAppBar from "./Appbar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

function App() {
  return (
    <div className="App">
      <DenseAppBar></DenseAppBar>
      <Stack direction="row" spacing={5} sx={{ ml: 5 }}>
        <Paper sx={{ p: 5 }}>
          <div style={{ width: 500, height: 200 }}>
            <Button variant="contained">
              Pobierz dane o wszystkich repozytoriach
            </Button>
          </div>
        </Paper>
        <Paper sx={{ p: 5 }}>
          <div style={{ width: 500, height: 400 }}>
            <TextField
              id="filled-basic"
              defaultValue={2}
              label="Id repozytorium"
              variant="filled"
            />
            <Stack
              direction="row"
              sx={{ mt: 5 }}
              justifyContent="space-between"
            >
              <Button style={{ width: 240 }} variant="contained">
                Pobierz problemy
              </Button>
              <Button variant="contained" style={{ width: 240 }}>
                Pobierz wersje
              </Button>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ mt: 5 }}
            >
              <Button style={{ width: 240 }} variant="contained">
                Pobierz współautorów
              </Button>
              <Button style={{ width: 240 }} variant="contained">
                Pobierz commity
              </Button>
            </Stack>
            <Stack
              direction="row"
              justifyContent="justify-center"
              sx={{ mt: 5 }}
            >
              <Button style={{ width: 240 }} variant="contained">
                Zarządzaj językami
              </Button>
            </Stack>
          </div>
        </Paper>
      </Stack>
    </div>
  );
}

export default App;
