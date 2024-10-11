import React from "react";

import Search from "../../components/Search/Search";
import Results from "../../components/Results/Results";

import { Container } from "../../components/Styled/Home.styled";

function Home() {
  return (
    <Container>
      <Search />
      <Results />
    </Container>
  );
}

export default Home;
