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
      const list = res.slice(0 ,20);
      const finalListRequest = list.map(async e => {
        
        return { ...e , request : await fetch(`https://api.coinpaprika.com/v1/coins/${e.id}/ohlcv/latest/`).then( r => r.json())}
        }
      )
      // await Promise.all(finalListRequest.map(r => r.request));
      // const test = finalListRequest.map( r => {
      //   console.log(r)
      //   return {
      //     ...r , request : r.request.json()
      //   }
      // })
      // await Promise.all(test.map(r => r.request));

      console.log(finalListRequest);
      // await Promise.all(finalListRequest.map(r => r.request.json()));
      // const finalListResult = await Promise.all(finalListRequest.map( (r) => r.request.json())) ;

      // const finalListResponse = await Promise.all(finalListRequest);
      // const finalListResult = await Promise.all(finalListResponse.map( (r) => r.json())) ;

      console.log(finalListResult);
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