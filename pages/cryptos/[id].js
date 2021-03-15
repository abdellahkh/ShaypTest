import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'

export const getStaticPaths = async () => {
  const res = await fetch("https://api.coinpaprika.com/v1/coins");
  const dataRes = await res.json();
  dataRes.slice(0, 20);

  const paths = dataRes.map((crypto) => {
    return {
      params: { id: crypto.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://api.coinpaprika.com/v1/coins/" + id);
  const data = await res.json();
  return {
    props: { crypto: data },
  };
};

const Details = ({ crypto }) => {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>{crypto.id}</Card.Header>
        <Card.Body>
          <Card.Title>{crypto.name}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default Details;
