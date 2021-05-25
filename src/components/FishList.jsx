import { useEffect, useState } from "react";
import FishCard from "./FishCard";
import { species } from "./species";

const FishList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState(species);
  useEffect(() => {
    const filteredList = species.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
    setList(filteredList);
  }, [searchTerm]);

  return (
    <>
      <input
        className="input spacing"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></input>
      {list.map((item) => {
        return <FishCard key={item.id} url={item.url} name={item.name} />;
      })}
    </>
  );
};

export default FishList;
