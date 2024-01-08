import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({movie}) {
  return (
    <Card style={{ width: '18rem', height:'auto',marginTop:'10px', background:'black', color:'white'}}>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>Title:{movie.Title}</Card.Title>
        <Card.Text>
          <b>Released Year:{movie.Year}</b>
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;