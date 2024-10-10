import React from "react";
import { useQuery } from "react-query";

import useWordParamStore from "../stores/WordParam";

import {
  Container,
  LoadingMessage,
  ErrorMessage,
  MeaningSection,
  PartOfSpeech,
  DefinitionList,
  DefinitionItem,
} from "../Styled/Results.styled";

function Results() {
  const word = useWordParamStore((state) => state.word);
  console.log(word);

  const { data, isLoading, isError, error } = useQuery("word", async () => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );
    const results = await response.json();
    return results;
  });

  return (
    <Container>
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      {isError && <ErrorMessage>{error}</ErrorMessage>}
      {data && data.length > 0 && (
        <MeaningSection>
          {data[0].meanings.map((meaning, index) => (
            <div key={index}>
              <partOfSpeech>{meaning.partOfSpeech}</partOfSpeech>
              <DefinitionList>
                {meaning.definitions.map((definition, defIndex) => (
                  <DefinitionItem key={defIndex}>
                    {definition.definition}
                  </DefinitionItem>
                ))}
              </DefinitionList>
            </div>
          ))}
        </MeaningSection>
      )}
    </Container>
  );
}

export default Results;
