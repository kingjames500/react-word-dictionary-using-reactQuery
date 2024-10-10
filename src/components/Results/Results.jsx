import { useQuery } from "react-query";
function Results() {
  const { data, isLoading } = useQuery("dictionary", async () => {
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en_US/teacher",
    );
    const result = await response.json();
    return result;
  });
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{data[0].word}</h2>
          <p>{}</p>
        </div>
      )}
    </div>
  );
}

export default Results;
