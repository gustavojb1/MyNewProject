import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Unstable_Grid2 as Grid,
  Autocomplete,
  TextField,
} from "@mui/material";
import { FaCar } from "react-icons/fa";
import { NovaApoliceSelectCard } from "../../../components/nova-apolice-card";

const users = [
  { label: "Joao Paulo Souza", id: "su42efcatfe56" },
  { label: "Antônio Oliveira", id: "egtf5th25ae" },
  { label: "José Augusto", id: "ewf41f489rr" },
  { label: "Ricardo Moreira", id: "reg154gera21" },
];

export const NovaApolicePrimeirosDados = ({ setForm, tomador, setTomador, beneficiario, setBeneficiario }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleCardClick = (value) => {
    setSelectedValue(value);
  };


  return (
    <Card>
      <CardHeader
        // subheader="Manage the notifications"
        title="Selecione o tipo de apólice desejada"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={6} wrap="wrap">
          <Grid item xs={12} sm={12} md={4}>
            <NovaApoliceSelectCard
              title="Automóvel"
              logo={<FaCar fontSize="45px" />}
              background="backgroundBlue"
              selected={selectedValue === "Automóvel"}
              onClick={() => handleCardClick("Automóvel")}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <NovaApoliceSelectCard
              title="Acidente de Trabalho"
              logo={<FaCar fontSize="45px" />}
              background={"backgroundRed"}
              selected={selectedValue === "Acidente de Trabalho"}
              onClick={() => handleCardClick("Acidente de Trabalho")}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <NovaApoliceSelectCard
              title="Caução"
              background={"backgroundYellow"}
              logo={<FaCar fontSize="45px" />}
              selected={selectedValue === "Caução"}
              onClick={() => handleCardClick("Caução")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <NovaApoliceSelectCard
              title="Viagens"
              background={"backgroundPurple"}
              logo={<FaCar fontSize="45px" />}
              selected={selectedValue === "Viagens"}
              onClick={() => handleCardClick("Viagens")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <NovaApoliceSelectCard
              title="Saúde"
              background={"backgroundGray"}
              logo={<FaCar fontSize="45px" />}
              selected={selectedValue === "Saúde"}
              onClick={() => handleCardClick("Saúde")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <NovaApoliceSelectCard
              title="Multirisco"
              background={"backgroundOrange"}
              logo={<FaCar fontSize="45px" />}
              selected={selectedValue === "Multirisco"}
              onClick={() => handleCardClick("Multirisco")}
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />

      <Grid container spacing={2}>
        {/* Coluna 1 */}
        <Grid item xs={12} sm={12} md={6} style={{ position: "relative" }}>
          <CardHeader
            subheader="Caso não encontre na lista faça o cadastro por gentileza"
            title="Selecione o Tomador"
          />
          <CardContent sx={{ display: "flex", columnGap: "20px" }}>
            <Autocomplete
              disablePortal
              options={users}
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Selecione o tomador" />}
              value={tomador}
              onChange={(event, newValue) => {
                setTomador(newValue);
              }}
            />
            <Button variant="outlined">Cadastrar</Button>
          </CardContent>
          <Divider orientation="horizontal" variant="middle" />
          <Divider
            orientation="vertical"
            style={{ position: "absolute", right: 0, top: 30, height: "75%" }}
          />
        </Grid>

        {/* Coluna 2 */}
        <Grid item xs={12} sm={12} md={6}>
          <CardHeader
            subheader="Caso não encontre na lista faça o cadastro por gentileza"
            title="Selecione o Beneficiário"
          />

          <CardContent sx={{ display: "flex", columnGap: "20px" }}>
            <Autocomplete
              disablePortal
              options={users}
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Selecione o Beneficiário" />}
              value={beneficiario}
              onChange={(event, newValue) => {
                setBeneficiario(newValue);
              }}
            />
            <Button variant="outlined">Cadastrar</Button>
          </CardContent>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" variant="middle" />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          onClick={() => setForm(1)}
          variant="contained"
          sx={{
            fontSize: "1rem",
          }}
        >
          Próximo
        </Button>
      </CardActions>
    </Card>
  );
};
