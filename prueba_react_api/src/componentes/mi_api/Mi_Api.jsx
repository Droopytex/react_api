import { useState, useEffect } from "react";

function Mi_Api() {
  const [info, setInfo] = useState([]);

  const consultarApi = async () => {
    try {
      const url = "https://narutodb.xyz/api/character";
      const response = await fetch(url);
      const data = await response.json();
      const personajes = data.characters;
      console.log(personajes);

      setInfo(personajes);
    } catch (error) {
      console.log("No logramos entrar a los datos");
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <>
      <div>
        {info.map((personajes, id) => (
          <p key={id}>{`${personajes.id} - ${personajes.name}`}</p>
        ))}
      </div>
    </>
  );
}

export default Mi_Api;
