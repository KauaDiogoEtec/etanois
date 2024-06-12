import { useEffect, useState } from "react";
import styled from "styled-components";

const DivPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
`;
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //background-color: pink;
`;
const TextInput = styled.input`
  margin: 10px;
  padding: 15px;
  width: 200px;
  background-color: #e0e0e0;
  color: black;
  border-width: 0px;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  outline-color: #c7c7c7;
  box-shadow: #494949;
  //cursor: pointer;
`;

const Button = styled.button`
  padding: 10px 20px;
  color: #606060;
  border: 1px solid black;
  cursor: pointer;
`;

const Text = styled.p`
  margin-top: 10px;
  font-size: 22px;
`;

export default () => {
  const [etanol,    setEtanol]    = useState('');
  const [gasolina,  setGasolina]  = useState('');
  const [calcular,  setCalcular]  = useState('--.--');
  const [resultado, setResultado] = useState('...');

  const handleCalcular = () => {
    let value = (etanol / gasolina).toFixed(2);
    
    if(value == "Infinity")
      setCalcular(0);
    else
      setCalcular(value);
    
    setResultado((value <= 0.7) ? "Etanol" : "Gasolina");
  }

  /*useEffect(() => {
      setResultado((calcular <= 0.7) ? "Etanol" : "Gasolina");
    }, [calcular]
  );*/

  return(
    <DivPage>
    <Container>
      <TextInput placeholder="Informe o valor do Etanol"   type="number" onChange={t => setEtanol(t.target.value)}/>
      <TextInput placeholder="Informe o valor da Gasolina" type="number" onChange={t => setGasolina(t.target.value)}/>
      <Button onClick={handleCalcular}>Calcular</Button>
      <Text>Abasteça com {resultado}</Text>
      <Text>{calcular}%</Text>
    </Container>
    </DivPage>
  );
}