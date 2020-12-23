import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/ui/header";
import CharacterGrid from "./components/characters/characterGrid";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        "https://www.breakingbadapi.com/api/characters"
      );
      console.log(result.data);
      setItems(result.data);
      setisLoading(false);
    };
    fetchItems();
  });

  return (
    <div className="container">
      <Header></Header>
      <CharacterGrid items={items} isLoading={isLoading}></CharacterGrid>
    </div>
  );
};

export default App;
