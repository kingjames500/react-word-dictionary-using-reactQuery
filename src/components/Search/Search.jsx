import { useState } from "react";
import useWordParamStore from "../stores/WordParam";

import {
  Container,
  Title,
  Button,
  FormGroup,
  Input,
} from "../Styled/Search.styled";

function Search() {
  const changeWord = useWordParamStore((state) => state.setWord);

  const [wordParam, setWordParam] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    changeWord(wordParam);
  };
  return (
    <Container>
      <Title>enter a word to search</Title>
      <FormGroup className="form-group">
        <label htmlFor="word" className="form-group-label">
          <Input
            type="text"
            placeholder="enter the word"
            value={wordParam}
            onChange={(e) => setWordParam(e.target.value)}
          />
        </label>
        <label htmlFor="Search" className="form-group-label">
          <Button onClick={handleSearch}>Search</Button>
        </label>
      </FormGroup>
    </Container>
  );
}

export default Search;
