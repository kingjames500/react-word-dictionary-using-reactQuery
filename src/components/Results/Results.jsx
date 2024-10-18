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
  const { data, isLoading, isError, error } = useQuery(
    ["word", word], // Add word as a dependency
    async () => {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );
      const results = await response.json();
      return results;
    },
    {
      enabled: !!word, // Only run the query if word is not empty
    },
  );

  return (
    <Container>
      {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
      {isError && <ErrorMessage>{error.message}</ErrorMessage>}
      {!word ? (
        <ErrorMessage>Please enter a word to search.</ErrorMessage>
      ) : data && data.length > 0 ? (
        <MeaningSection>
          <h2>{data[0].word}</h2>
          {data[0].meanings.map((meaning, index) => (
            <div key={index}>
              <PartOfSpeech>{meaning.partOfSpeech}</PartOfSpeech>
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
      ) : (
        !isLoading && <ErrorMessage>Word not found</ErrorMessage>
      )}
    </Container>
  );
}

export default Results;
