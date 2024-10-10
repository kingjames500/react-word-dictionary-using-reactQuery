import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 60%;
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
  margin-bottom: 1rem;
  h2 {
    font-size: 2rem;
    color: blue;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: capitalize;
    font-weight: 700;
  }
`;

export const PartOfSpeech = styled.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-weight: 700;
  text-align: center;
`;

export const DefinitionList = styled.ul`
  list-style-type: none;
  margin-left: 2rem;
`;

export const DefinitionItem = styled.li`
  font-size: 1rem;
  color: #34495e;
  line-height: 1.5;
  /* margin-bottom: 0.8rem; */
`;
