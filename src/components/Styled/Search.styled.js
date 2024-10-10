import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid red;
  width: 60%;
  margin: auto;
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
`;

export const Input = styled.input`
  padding: 0.8rem;
  font-size: 1.2rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;

  &::placeholder {
    font-style: italic;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1.3rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
