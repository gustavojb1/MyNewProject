import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { Divider, SvgIcon } from "@mui/material";
import { IoMdHome } from "react-icons/io";
import { FaCarAlt } from "react-icons/fa";
import { FaCarBurst } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { FaPersonFalling } from "react-icons/fa6";

export const items = [
  {
    title: "Home",
    group: "Home",
    path: "/",
  },

  {
    title: "Tomador",
    group: "Produção",
    submenu: [
      { title: "Cadastrar", path: "/tomador-cadastrar" },
      { title: "Consultar", path: "/tomador-consultar" },
    ],
  },
  {
    title: "Simulações",
    group: "Produção",
    submenu: [
      { title: "Automóvel", path: "/simulacoes-automovel" },
      { title: "Sinistros", path: "/simulacoes-sinistros" },
      { title: "Saúde", path: "/simulacoes-saude" },
      { title: "Viagens", path: "/simulacoes-viagens" },
      { title: "Acidentes de Trabalho", path: "/simulacoes-acidentes-de-trabalho" },
    ],
  },
  {
    title: "Apólices",
    group: "Produção",
    submenu: [
      { title: "Consultar Apólices", path: "/apolices-consultar" },
      { title: "Nova Apólices", path: "/producao/apolices/nova-apolice" },
    ],
  },
  {
    title: "Nova Participação",
    group: "Sinistros",
    path: "/sinistros-nova-participacao",
  },
  {
    title: "Sinistros",
    group: "Sinistros",
    submenu: [
      { title: "Consultar", path: "/sinistros-consultar" },
      { title: "Participações Pendentes", path: "/sinistros-participacoes-pendentes" },
      { title: "Indenizações", path: "/sinistros-indenizacoes" },
    ],
  },
  {
    title: "Prestadores",
    group: "Sinistros",
    path: "/prestadores",
  },
  {
    title: "Cobranças",
    group: "Gestão Financeira",

    submenu: [
      { title: "Apólices", path: "/cobrancas-apolices" },
      { title: "Resseguradoras", path: "/cobrancas-resseguradoras" },
      { title: "Cosseguradoras", path: "/cobrancas-cosseguradoras" },
    ],
  },
  {
    title: "Operacional",
    group: "Gestão Financeira",

    path: "/operacional",
  },
  {
    title: "Contabilidade",
    group: "Gestão Financeira",

    path: "/contabilidade",
  },

  {
    title: "Resseguro",
    group: "Resseguros/Cosseguros",
    submenu: [
      { title: "Resseguradoras", path: "/resseguro-resseguradoras" },
      {
        title: "Distribuição Manual",
        submenu: [
          { title: "Recibos", path: "//resseguro-seguro/resseguro/distribuicao-manual/recibos" },
          { title: "Sinistros", path: "/resseguro-sinistros" },
        ],
      },
    ],
  },
  {
    title: "Cosseguro",
    group: "Resseguros/Cosseguros",

    submenu: [
      { title: "Cosseguradoras", path: "/cosseguro-cosseguradoras" },
      { title: "Operações", path: "/cosseguro-operacoes" },
      { title: "Regime Especial", path: "/cosseguro-regime-especial" },
    ],
  },

  {
    title: "Produção",
    group: "Relatórios/Mapas",
    path: "/relatorios-producao",
  },
  {
    title: "Sinistros",
    group: "Relatórios/Mapas",

    path: "/relatorios-sinistros",
  },
  {
    title: "Mapas",
    group: "Relatórios/Mapas",

    path: "/relatorios-mapas",
  },
  {
    title: "IOPS",
    group: "Relatórios/Mapas",

    path: "/relatorios-iops",
  },
  {
    title: "Cosseguro",
    group: "Relatórios/Mapas",

    path: "/relatorios-cosseguro",
  },
  {
    title: "Resseguro",
    group: "Relatórios/Mapas",

    path: "/relatorios-resseguro",
  },

  {
    title: "Indicadores",
    group: "Outras Operações",
    path: "/outras-operacoes-indicadores",
  },
  {
    title: "Campanha de Produtos",
    group: "Outras Operações",

    path: "/outras-operacoes-campanha-de-produtos",
  },
  {
    title: "Compliance",
    group: "Outras Operações",

    path: "/outras-operacoes-compliance",
  },
  {
    title: "Automação",
    group: "Outras Operações",

    path: "/outras-operacoes-automacao",
  },

  {
    title: "Gestão de Utilizadores",
    group: "Configurações",
    path: "/configuracao-gestao-de-utilizadores",
  },
  {
    title: "Gestão de Permissões",
    group: "Configurações",

    path: "/configuracao-gestao-de-permissoes",
  },
  {
    title: "Parametrizações",
    group: "Configurações",

    path: "/configuracao-parametrizacoes",
  },
  {
    title: "Propriedades",
    group: "Configurações",

    path: "/configuracao-propriedades",
  },
  {
    title: "Tabela de Valores",
    group: "Configurações",

    path: "/configuracao-tabela-de-valores",
  },
  {
    title: "Conceitos",
    group: "Configurações",

    path: "/configuracao-conceitos",
  },
  {
    title: "Fluxo de Trabalho",
    group: "Configurações",

    path: "/configuracao-fluxo-de-trabalho",
  },
  {
    title: "Descontos",
    group: "Configurações",

    path: "/configuracao-descontos",
  },
  {
    title: "Relatórios",
    group: "Configurações",

    path: "/configuracao-relatorios",
  },
  {
    title: "Resseguro",
    group: "Configurações",

    path: "/configuracao-resseguro",
  },
  {
    title: "Tipos de documento",
    group: "Configurações",

    path: "/configuracao-tipos-de-documento",
  },
  {
    title: "Consumidores de Eventos",
    group: "Configurações",

    path: "/configuracao-consumidores-de-eventos",
  },
  {
    title: "Documentos",
    group: "Configurações",

    path: "/configuracao-documentos",
  },
  {
    title: "Eventos",
    group: "Configurações",

    path: "/configuracao-eventos",
  },
  {
    title: "Taxas",
    group: "Configurações",

    path: "/configuracao-taxas",
  },
  {
    title: "Tarefas Agendadas",
    group: "Configurações",

    path: "/configuracao-tarefas-agendadas",
  },
  {
    title: "Sinistros",
    group: "Configurações",

    path: "/configuracao-sinistros",
  },
  {
    title: "Tabela de Mapeamentos",
    group: "Configurações",

    path: "/configuracao-tabela-de-mapeamentos",
  },
  {
    title: "Esquemas",
    group: "Configurações",

    path: "/configuracao-esquemas",
  },
  {
    title: "Máscaras de matrículas",
    group: "Configurações",

    path: "/configuracao-configurar-mascaras-de-matriculas",
  },
  {
    title: "Bonus Malus",
    group: "Configurações",

    path: "/configuracao-bonus-malus",
  },
  {
    title: "Data Type",
    group: "Configurações",

    path: "/configuracao-data-type",
  },
  {
    title: "Editar infos visíveis",
    group: "Configurações",

    path: "/configuracao-editar-infos-visiveis",
  },
  {
    title: "Log de sincronismo",
    group: "Configurações",

    path: "/configuracao-log-de-sincronismo",
  },
  {
    title: "Gerir TPAs",
    group: "Configurações",

    path: "/configuracao-gerir-tpas",
  },
  {
    title: "Multi-Lingua",
    group: "Configurações",

    path: "/configuracao-multi-lingua",
  },

  // EXEMPLOS DE PÁGINAS

  // {
  //   title: "Overview",
  //   path: "/overview",
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <ChartBarIcon />
  //     </SvgIcon>
  //   ),
  // },
  // {
  //   title: "Customers",
  //   path: "/customers",
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UsersIcon />
  //     </SvgIcon>
  //   ),
  // },
  // {
  //   title: "Companies",
  //   path: "/companies",
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <ShoppingBagIcon />
  //     </SvgIcon>
  //   ),
  // },
  // {
  //   title: "Account",
  //   path: "/account",
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserIcon />
  //     </SvgIcon>
  //   ),
  // },
  // {
  //   title: "Settings",
  //   path: "/settings",
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <CogIcon />
  //     </SvgIcon>
  //   ),
  // },
  // {
  //   title: "Login",
  //   path: "/auth/login",
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <LockClosedIcon />
  //     </SvgIcon>
  //   ),
  // },
  // {
  //   title: "Register",
  //   path: "/auth/register",
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserPlusIcon />
  //     </SvgIcon>
  //   ),
  // },
  // {
  //   title: "Error",
  //   path: "/404",
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <XCircleIcon />
  //     </SvgIcon>
  //   ),
  // },
];
