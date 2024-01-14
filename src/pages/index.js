import Head from "next/head";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
  Divider,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { ServiceCard } from "src/sections/home/service-card";
import { CompaniesSearch, ServicesSearch } from "src/sections/home/service-search";
import React from "react";
import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";

const services = [
  {
    id: "2569ce0d517a7f06d3ea1f24",
    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Cadastrar Tomador",
    updatedAt: "6",
    group: "Produção",
    color: "#D2E0FB",
  },
  {
    id: "ed2b900870ceba72d203ec15",
    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Consultar Tomador",
    updatedAt: "24",
    group: "Produção",
    color: "#E9FFC2",
  },
  {
    id: "5dab321376eff5821407e887",
    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Consultar Apólice",
    updatedAt: "15",
    group: "Produção",
    color: "#E9FFC2",
  },
  {
    id: "5dab321376eff9875407e887",
    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Nova Apólice",
    updatedAt: "15",
    group: "Produção",
    color: "#D2E0FB",
  },
  {
    id: "a033e38768c82fca90df3db7",
    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Simulação de Automóvel",
    updatedAt: "12",
    group: "Produção",
    color: "#E4D0D0",
  },
  {
    id: "1efecb2bf6a51def9869ab0f",

    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Simulação de Sinistros",
    updatedAt: "48",
    group: "Produção",
    color: "#E4D0D0",
  },
  {
    id: "1ed68149f65fbc6089b5fd07",
    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Simulação de Saúde",
    updatedAt: "12",
    group: "Produção",
    color: "#E4D0D0",
  },
  {
    id: "5dab321376eff6177407e887",

    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Simulação de Viagens",
    updatedAt: "15",
    group: "Produção",
    color: "#E4D0D0",
  },
  {
    id: "5dab321376eff6522407e887",

    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Simulação de Acidentes de Trabalho",
    updatedAt: "15",
    group: "Produção",
    color: "#E4D0D0",
  },
  {
    id: "5dab321376eff6522407e887",
    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Nova Participação",
    updatedAt: "15",
    group: "Sinistros",
    color: "#D2E0FB",
  },
  {
    id: "5dab321376eff6522407e887",
    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Consultar Sinistros",
    updatedAt: "15",
    group: "Sinistros",
    color: "#E9FFC2",
  },
  {
    id: "5dab321376eff6522407e887",

    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Participações Pendentes",
    updatedAt: "15",
    group: "Sinistros",
    color: "#F4F3F3",
  },
  {
    id: "5dab321376eff6522407e887",

    logo: (
      <SvgIcon fontSize="large"  sx={{border: "1px solid red"}}>
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Indenizações",
    updatedAt: "15",
    group: "Sinistros",
    color: "#F8E8EE",
  },
  {
    id: "5dab321376eff6522407e887",
    logo: (
      <SvgIcon fontSize="large">
        <ChartBarIcon />
      </SvgIcon>
    ),
    title: "Prestadores de Sinistro",
    updatedAt: "15",
    group: "Sinistros",
    color: "#EEF1FF",
  },
];

const groupedServices = services.reduce((groups, service) => {
  const group = groups[service.group] || [];
  group.push(service);
  groups[service.group] = group;
  return groups;
}, {});


const Page = () => (
  <>
    <Head>
      <title>Home | UniRisk360</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h4">Nossos Serviços</Typography>
              <Stack alignItems="center" direction="row" spacing={1}></Stack>
            </Stack>
          </Stack>
          <ServicesSearch />
          {Object.entries(groupedServices).map(([groupName, groupServices]) => (
            <React.Fragment key={groupName}>
              <Typography variant="h5">{groupName}</Typography>
              <Divider />
              <Grid container spacing={3} sx={{ pb: 5 }}>
                {groupServices.map((service) => (
                  <Grid xs={12} md={6} lg={3} key={service.id}>
                    <ServiceCard company={service} />
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Pagination
              count={3}
              size="large"
            /> */}
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
