import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/pt";
import React, { useState } from "react";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { FaCalculator } from "react-icons/fa6";
import { IoIosSave } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { BsFillPrinterFill } from "react-icons/bs";
import { CiText } from "react-icons/ci";

const users = [
  { label: "Joao Paulo Souza", id: "su42efcatfe56" },
  { label: "Antônio Oliveira", id: "egtf5th25ae" },
  { label: "José Augusto", id: "ewf41f489rr" },
  { label: "Ricardo Moreira", id: "reg154gera21" },
];

const NovaApoliceFormulario = ({ setForm, tomador, beneficiario }) => {
  const [value, setValue] = useState(new Date());
  const [radioButton, setRadioButton] = useState("ano");

  //   ToggleButton
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);

  const handleRadioButton = (event, newRadioButtonValue) => {
    setRadioButton(newRadioButtonValue);
  };
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Usuário Loagado"
              defaultValue="Admin_01"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Tomador"
              defaultValue={tomador ? tomador.label : ""}
              InputProps={{
                readOnly: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Beneficiário"
              defaultValue={beneficiario ? beneficiario.label : ""}
              InputProps={{
                readOnly: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Autocomplete
              disablePortal
              options={users}
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Agente Produtor" />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Autocomplete
              disablePortal
              options={users}
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Cobrador" />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Autocomplete
              disablePortal
              options={users}
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Gestor Interno" />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="caption" gutterBottom pt={0} pl={1}>
              Modalidade
            </Typography>
            <ToggleButtonGroup
              value={radioButton}
              onChange={handleRadioButton}
              exclusive
              aria-label="Platform"
              color="primary"
              fullWidth
              sx={{
                height: "43%",
              }}
            >
              <ToggleButton value="ano">Ano e Seguintes</ToggleButton>
              <ToggleButton value="temp">Temporário</ToggleButton>
            </ToggleButtonGroup>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Data de Início"
                // value={selectedDate}
                // onChange={(newValue) => {
                //   setSelectedDate(newValue);
                // }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt">
              <DatePicker
                sx={{ width: "100%" }}
                views={["month", "day"]}
                label="Renovação"
                // value={value}
                // onChange={(newValue) => {
                //   setValue(newValue);
                // }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Número de objetos seguros"
              defaultValue="0"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Autocomplete
              disablePortal
              options={[
                { label: "Tarifa Manual", id: "manual" },
                { label: "Tarifa 1", id: "um" },
                { label: "Tarifa 2", id: "dois" },
              ]}
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Tarifa" />}
            />
          </Grid>
        </Grid>
        <Box
          pt={1}
          px={3}
          pb={4}
          mt={2}
          sx={{
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <Typography variant="subtitle2">Simulação</Typography>

          <Grid container spacing={3} pt={2}>
            <Grid item xs={6} sm={4} md={2.4}>
              <TextField
                label="Anuidade"
                defaultValue="1"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <TextField
                label="Acta"
                defaultValue="0.0"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <TextField
                label="Data Efeito"
                defaultValue="2024/01/01"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <TextField
                label="Data Renovação"
                defaultValue="2024/01/02"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sm={4} md={2.4}>
              <TextField
                label="Data de continuado"
                defaultValue="2024/01/03"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          pt={1}
          px={3}
          pb={4}
          mt={2}
          sx={{
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <Typography variant="subtitle2">Fracionamento</Typography>

          <Grid container spacing={3} pt={2}>
            <Grid item xs={12} sm={4} md={4}>
              <Tooltip
                title={
                  <React.Fragment>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      rowGap={1}
                      alignItems={"flex-end"}
                    >
                      <Box>
                        <Typography>
                          Premio Simples: 0,00
                          <Typography variant="caption">AKZ</Typography>
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>
                          IVA Liquidado: 0,00
                          <Typography variant="caption">AKZ</Typography>
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>
                          IVA a recuperar de Cativo: 0,00
                          <Typography variant="caption">AKZ</Typography>
                        </Typography>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              >
                <Box display={"flex"} flexDirection={"column"} fullWidth>
                  <Box
                    fullWidth
                    sx={{
                      borderRadius: "5px 5px 0px 0px",
                    }}
                    bgcolor={"#A94438"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    py={1}
                    color={"#fff"}
                  >
                    <Typography variant="h5">Anual</Typography>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "0px 0px 5px 5px",
                    }}
                    bgcolor={"#FF004D"}
                    color={"#fff"}
                    fullWidth
                    alignItems={"flex-end"}
                    columnGap={1}
                    display={"flex"}
                    justifyContent={"center"}
                    py={1}
                  >
                    <Typography variant="h5">0,00</Typography>
                    <Typography variant="h6">AKZ</Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Tooltip
                title={
                  <React.Fragment>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      rowGap={1}
                      alignItems={"flex-end"}
                    >
                      <Box>
                        <Typography>
                          Premio Simples: 0,00
                          <Typography variant="caption">AKZ</Typography>
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>
                          IVA Liquidado: 0,00
                          <Typography variant="caption">AKZ</Typography>
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>
                          IVA a recuperar de Cativo: 0,00
                          <Typography variant="caption">AKZ</Typography>
                        </Typography>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              >
                <Box display={"flex"} flexDirection={"column"} fullWidth>
                  <Box
                    fullWidth
                    sx={{
                      borderRadius: "5px 5px 0px 0px",
                    }}
                    bgcolor={"#A94438"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    py={1}
                    color={"#fff"}
                  >
                    <Typography variant="h5">Semestral</Typography>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "0px 0px 5px 5px",
                    }}
                    bgcolor={"#FF004D"}
                    color={"#fff"}
                    fullWidth
                    alignItems={"flex-end"}
                    columnGap={1}
                    display={"flex"}
                    justifyContent={"center"}
                    py={1}
                  >
                    <Typography variant="h5">0,00</Typography>
                    <Typography variant="h6">AKZ</Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Tooltip
                title={
                  <React.Fragment>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      rowGap={1}
                      alignItems={"flex-end"}
                    >
                      <Box>
                        <Typography>
                          Premio Simples: 0,00
                          <Typography variant="caption">AKZ</Typography>
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>
                          IVA Liquidado: 0,00
                          <Typography variant="caption">AKZ</Typography>
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>
                          IVA a recuperar de Cativo: 0,00
                          <Typography variant="caption">AKZ</Typography>
                        </Typography>
                      </Box>
                    </Box>
                  </React.Fragment>
                }
              >
                <Box display={"flex"} flexDirection={"column"} fullWidth>
                  <Box
                    fullWidth
                    sx={{
                      borderRadius: "5px 5px 0px 0px",
                    }}
                    bgcolor={"#A94438"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    py={1}
                    color={"#fff"}
                  >
                    <Typography variant="h5">Trimestral</Typography>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "0px 0px 5px 5px",
                    }}
                    bgcolor={"#FF004D"}
                    color={"#fff"}
                    fullWidth
                    alignItems={"flex-end"}
                    columnGap={1}
                    display={"flex"}
                    justifyContent={"center"}
                    py={1}
                  >
                    <Typography variant="h5">0,00</Typography>
                    <Typography variant="h6">AKZ</Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>

        <Box
          pt={1}
          px={3}
          pb={4}
          mt={2}
          sx={{
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <Grid container spacing={3} pt={2}>
            <Grid item xs={12} sm={7} md={7}>
              <Box display={"flex"} columnGap={2} fullWidth>
                <Box
                  sx={{
                    width: "40%",
                  }}
                >
                  <Autocomplete
                    fullWidth
                    disablePortal
                    options={[
                      { label: "Todos", id: "todos" },
                      { label: "Grupo 1", id: "grupo1" },
                      { label: "Grupo 2", id: "grupo2" },
                    ]}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} label="Tarifa" />}
                  />
                </Box>
                <Box
                  sx={{
                    width: "60%",
                  }}
                  flexWrap={"nowrap"}
                  display={"flex"}
                  columnGap={1}
                >
                  <ToggleButton
                    fullWidth
                    value="check"
                    color="primary"
                    selected={selected1}
                    onChange={() => {
                      setSelected1(!selected1);
                    }}
                  >
                    Activas
                  </ToggleButton>
                  <ToggleButton
                    fullWidth
                    value="check"
                    color="primary"
                    selected={selected2}
                    onChange={() => {
                      setSelected2(!selected2);
                    }}
                  >
                    Inconsistentes
                  </ToggleButton>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={5} md={5}>
              <Autocomplete
                fullWidth
                disablePortal
                options={[
                  { label: "Unidade 1", id: "unidade1" },
                  { label: "Unidade 2", id: "unidade2" },
                  { label: "Unidade 3", id: "unidade3" },
                ]}
                sx={{ width: "100%" }}
                renderInput={(params) => <TextField {...params} label="Pesquisar Unidade" />}
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <Divider orientation="horizontal" variant="middle" />
      <CardActions
        sx={{
          justifyContent: "flex-end",
          backgroundColor: "#A9A9A9",
          flexWrap: "wrap",
          rowGap: "8px",
        }}
      >
        <Button
          variant="contained"
          sx={(theme) => ({
            py: "3px",
            px: "0",
            fontSize: "0.8rem",
            backgroundColor: theme.palette.myColors.backgroundButton,
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.myColors.backgroundButtonHover,
            },
          })}
        >
          <Stack direction="row" alignItems="center" sx={{ px: "7px", columnGap: "3px" }}>
            <HiMiniCodeBracket fontSize="16px" />
            Send
          </Stack>
        </Button>
        <Button
          variant="contained"
          sx={(theme) => ({
            py: "3px",
            px: "0",
            fontSize: "0.8rem",
            backgroundColor: theme.palette.myColors.backgroundButton,
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.myColors.backgroundButtonHover,
            },
          })}
        >
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{ px: "7px", columnGap: "3px" }}
          >
            <HiMiniCodeBracket fontSize="16px" />
            Reavaliar
          </Stack>
        </Button>
        <Button
          variant="contained"
          sx={(theme) => ({
            py: "3px",
            px: "0",
            fontSize: "0.8rem",
            backgroundColor: theme.palette.myColors.backgroundButton,
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.myColors.backgroundButtonHover,
            },
          })}
        >
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{ px: "7px", columnGap: "3px" }}
          >
            <FaCalculator fontSize="16px" />
            Recalcular
          </Stack>
        </Button>
        <Button
          variant="contained"
          sx={(theme) => ({
            py: "3px",
            px: "0",
            fontSize: "0.8rem",
            backgroundColor: theme.palette.myColors.backgroundButton,
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.myColors.backgroundButtonHover,
            },
          })}
        >
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{ px: "7px", columnGap: "3px" }}
          >
            <IoIosSave fontSize="16px" />
            Guardar
          </Stack>
        </Button>
        <Button
          variant="contained"
          sx={(theme) => ({
            py: "3px",
            px: "0",
            fontSize: "0.8rem",
            backgroundColor: theme.palette.myColors.backgroundButton,
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.myColors.backgroundButtonHover,
            },
          })}
        >
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{ px: "7px", columnGap: "3px" }}
          >
            <IoIosAddCircle fontSize="16px" />
            Adicionar
          </Stack>
        </Button>
        <Button
          variant="contained"
          sx={(theme) => ({
            py: "3px",
            px: "0",
            fontSize: "0.8rem",
            backgroundColor: theme.palette.myColors.backgroundButton,
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.myColors.backgroundButtonHover,
            },
          })}
        >
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{ px: "7px", columnGap: "3px" }}
          >
            <BsFillPrinterFill fontSize="16px" />
            Impressões
          </Stack>
        </Button>
        <Button
          variant="contained"
          sx={(theme) => ({
            py: "3px",
            px: "0",
            fontSize: "0.8rem",
            backgroundColor: theme.palette.myColors.backgroundButton,
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.myColors.backgroundButtonHover,
            },
          })}
        >
          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{ px: "7px", columnGap: "3px" }}
          >
            <CiText fontSize="16px" />
            Textos
          </Stack>
        </Button>
      </CardActions>
    </Card>
  );
};

export default NovaApoliceFormulario;
