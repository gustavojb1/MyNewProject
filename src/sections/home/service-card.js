import PropTypes from "prop-types";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ClockIcon from "@heroicons/react/24/solid/ClockIcon";
import { Avatar, Box, Card, CardContent, Divider, Stack, SvgIcon, Typography } from "@mui/material";


export const ServiceCard = (props) => {
  const { company } = props;

  return (
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardContent sx={{
          backgroundColor: company.color? company.color : "white",
          height: "100%",
        }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pb: 3,
            }}
          >
            {company.logo}
          </Box>
          <Typography align="center" gutterBottom variant="h5">
            {company.title}
          </Typography>
          {/* <Typography
          align="center"
          variant="body1"
        >
          {company.description}
        </Typography> */}
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ p: 2 }}
        >
          <Stack alignItems="center" direction="row" spacing={1}>
            <SvgIcon color="action" fontSize="small">
              <ClockIcon />
            </SvgIcon>
            <Typography color="text.secondary" display="inline" variant="body2">
              Ultima atualização: {company.updatedAt} h
            </Typography>
          </Stack>
          {/* <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <ArrowDownOnSquareIcon />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            {company.downloads} Downloads
          </Typography>
        </Stack> */}
        </Stack>
      </Card>
  );
};

ServiceCard.propTypes = {
  company: PropTypes.object.isRequired,
};
