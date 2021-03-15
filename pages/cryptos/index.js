import { useQuery } from 'react-query'
import Table from '../../components/Table';


export default function App() {
  return (    
      <Home />
  )
}
function Home() {

  const { isLoading, error, data } = useQuery('listCoins', async () => { 
    const request = await fetch('https://api.coinpaprika.com/v1/coins');
    const res = await request.json();
    let list = res.slice(0 ,10);
    const finalListRequest = list.map( e => fetch(`https://api.coinpaprika.com/v1/coins/${e.id}/ohlcv/latest/`));
    const finalListResponse = await Promise.all(finalListRequest);
    const finalListResult = finalListResponse.map( async (res) => {
      if(!res.ok) {
        throw new Error("Error fetching data")
      }
      return await res.json()
    });

    const resToJson = await Promise.all(finalListResult);

    list = list.map((elt, index) => {
      return {
        ...elt,
        details: resToJson[index][0]
      }
    })      
        return list;
    }
  )
    // console.log(data)
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  return (
    <Table list={data}/>
  )
}