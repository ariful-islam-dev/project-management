import { Box, Container, Typography } from "@mui/material";
import React from "react";

const NoMatch = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h1">404</Typography>
        <Typography variant="body2">Page Not Found</Typography>
      </Box>
    </Container>
  );
};

export default NoMatch;
