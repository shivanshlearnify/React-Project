import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./Components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [filterdData, setFilterdData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedButton, setselectedButton] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilterdData(json);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch data");
      }
    };

    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilterdData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterdData(filter);
  };

  const filterdFood = (type) => {
    if (type === "all") {
      setFilterdData(data);
      setselectedButton("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterdData(filter);
    setselectedButton(type);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading..........</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/Images/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Food...."
            />
          </div>
        </TopContainer>

        <FilterContainer>
          <Button onClick={() => filterdFood("all")}>All</Button>
          <Button onClick={() => filterdFood("Breakfast")}>Breakfast</Button>
          <Button onClick={() => filterdFood("Lunch")}>Lunch</Button>
          <Button onClick={() => filterdFood("Dinner")}>Dinner</Button>
        </FilterContainer>
      </Container>

      <SearchResult data={filterdData} />
    </>
  );
}

export default App;

export const Container = styled.div`
  max-widht: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
`;
