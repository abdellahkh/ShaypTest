import { useQuery } from 'react-query'
import Table from '../../components/Table';


export default function App() {
  return (    
      <Home />
  )
}
function Home() {

  const { isLoading, error, data } = useQuery('listCoins', () => 
    fetch('https://api.coinpaprika.com/v1/coins')
      .then(res => res.json())
      .then(list => list.slice(0,20))
  )
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  return (
    <Table list={data}/>
  )
}