import { Container, Grid } from "@mui/material";
import { useStoreState } from "easy-peasy";
import React from "react";
import Member from "../partials/Member";

const MembersPage = () => {
  const members = useStoreState((state) => state.members);

  return (
    <Container maxWidth="lg">
      <Grid container>
        {members.map((member) => (
          <Grid key={member.id} item md={4}>
            <Member member={member} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MembersPage;
