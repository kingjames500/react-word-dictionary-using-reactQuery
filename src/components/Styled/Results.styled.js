import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: #333;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: red;
`;

export const MeaningSection = styled.div`
  margin-bottom: 2rem;
`;

export const PartOfSpeech = styled.h3`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-transform: capitalize;
`;

export const DefinitionList = styled.ul`
  list-style-type: none;
  margin-left: 2rem;
`;

export const DefinitionItem = styled.li`
  font-size: 1.4rem;
  color: #34495e;
  margin-bottom: 0.8rem;
`;
