import React from "react";

import {
  Container,
  Image,
  Title,
  FormGroup,
  Input,
  Button,
} from "../Styled/Search.styled";
import { useQuery } from "react-query";

function Search() {
  return (
    <Container>
      <Image src="/src/assets/dictionary.png" alt="" />
      <Title>enter a word to search</Title>
      <FormGroup className="form-group">
        <label htmlFor="word" className="form-group-label">
          <Input type="text" placeholder="enter the word" />
        </label>
        <label htmlFor="Search" className="form-group-label">
          <Button>Search</Button>
        </label>
      </FormGroup>
    </Container>
  );
}

export default Search;
