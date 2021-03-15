import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'

export const getStaticPaths = async () => {
  try {
      const res = await fetch("https://api.coinpaprika.com/v1/coins");
      if(!res.ok){
        throw new Error("Fetch list all not okay")
      }
      const dataRes = await res.json();
      dataRes.slice(0, 10);

      const paths = dataRes.map((crypto) => {
        return {
          params: { id: crypto.id.toString() },
        };
      });

      return {
        paths,
        fallback: false,
      };
} catch(e){
  console.log(e)
}
};

export const getStaticProps = async (context) => {
 try { 
  const id = context.params.id;
  const res = await fetch("https://api.coinpaprika.com/v1/coins/" + id);
  if(!res.ok){
    throw new Error("error fetch data");
  }
  const data = await res.json();
  // console.log("data => ",data)
  return {
    props: { crypto: data },
  };
}catch(e){
  console.log(e);
}
};

const Details = ({ crypto }) => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>{crypto.id}</Card.Header>
        <Card.Body>
          <Card.Title>{crypto.name}</Card.Title>
          <Card.Text>
            {crypto.description}
          </Card.Text>
          <Card.Text>
            Started at : {crypto.started_at}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default Details;
