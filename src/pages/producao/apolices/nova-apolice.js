import Head from "next/head";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { NovaApolicePrimeirosDados } from "src/sections/producao/apolice/nova-apolice-primeiros-dados";
import { useEffect, useState } from "react";
import NovaApoliceFormulario from "src/sections/producao/apolice/nova-apolice-formulario";

const Page = () => {
  const [form, setForm] = useState(0);
  const [tomador, setTomador] = useState(null);
  const [beneficiario, setBeneficiario] = useState(null);
  return (
    <>
      <Head>
        <title>Nova Apólice | UniRisk360</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant="h4">Nova Apólice</Typography>
              <Button
                onClick={() => setForm(0)}
                variant="outlined"
                sx={{
                  fontSize: "1rem",
                  justifySelf: "flex-start",
                  display: form === 0 ? 'none' : 'block',
                }}
              >
                Voltar
              </Button>
            </Box>
            {form === 0 ? (
              <NovaApolicePrimeirosDados
                setForm={setForm}
                tomador={tomador}
                setTomador={setTomador}
                beneficiario={beneficiario}
                setBeneficiario={setBeneficiario}
              />
            ) : (
              <NovaApoliceFormulario
                setForm={setForm}
                beneficiario={beneficiario}
                tomador={tomador}
              />
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
