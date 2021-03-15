import {Dropdown, InputGroup, FormControl, Button} from 'react-bootstrap'
import styles from "../styles/Home.module.css";


import { useQuery } from 'react-query'
import { useState } from 'react'


const converter = () => {
  const [choiceIn, setChoiceIn] = useState(null);
  const [choiceOut, setChoiceOut] = useState(null);
  const [inputIn, setInputIn ] = useState(null);
  const [result, setResult] = useState(null);
  const [errorData,  setError] = useState(null);


  const { isLoading, error, data } = useQuery('listCoins', () => 
    fetch('https://api.coinpaprika.com/v1/coins')
      .then(res => {
        if(!res.ok){
          throw new Error("Error fetching data")
        }
        return res.json()
      })
      .then(list => list.slice(0,20))
  )
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const handleSelectIn = (e) => {
    setChoiceIn(e);
  }

  const resetAll = () => {
    setChoiceIn(null);
    setChoiceOut(null);
    setInputIn(null);
    setResult(null);
  }

   const computeValue = async () => {
     try {
      const request = await fetch(`https://api.coinpaprika.com/v1/price-converter?base_currency_id=${choiceIn}&quote_currency_id=${choiceOut}&amount=${inputIn}`);
      if(!request.ok){
              throw new Error("Error fetching data")
            }
      const response =await request.json()
      setResult(response.price);
      setError(null);
     } catch(e){
       console.log(e)
       setError(e.message);
     }
      
      
   }
  return (
    <div className={styles.formConverter}>
        <div>
            <div className="mb-3">
              <Button onClick={resetAll} variant="danger">Reset</Button>
            </div>
            <div>
              <Dropdown onSelect={handleSelectIn}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {choiceIn ? choiceIn : 'Choix in'}
                </Dropdown.Toggle>
                <Dropdown.Menu >
                  {data.map(e => <Dropdown.Item eventKey={e.id} key={e.id}>{e.id}</Dropdown.Item>)}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  
                </InputGroup.Prepend>
                <FormControl
                  type = "number"
                  onChange={(e) => setInputIn(e.target.value)}
                  value={inputIn}
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </InputGroup>
            </div>    
        </div>
        <div>
            <Dropdown  onSelect={(e) => setChoiceOut(e)}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {choiceOut ? choiceOut : 'Choix out'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {data.map(e => <Dropdown.Item eventKey={e.id} key={e.id}>{e.id}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>
            { result && <h4>{ result }</h4> }
        </div>
        <div>
          { choiceIn && choiceOut && inputIn &&  <Button onClick={computeValue} variant="danger">Change</Button>}
         
        </div>
        <div>
          { errorData && <p>{errorData}</p> }
        </div>
        
        
    </div>
  );
};

export default converter;
