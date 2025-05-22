import { Card, Container } from "react-bootstrap";
import Price from "./components/Price";
import Description from "./components/Description";
import Name from "./components/Name";
import Image from "./components/Image";



function App() {
  const firstName = "Anta";
  return (
    <div className="App">

      {/*carte du produit*/}
      <Container className="my-5 d-flex justify-content-center">
        <Card style={{ width: "22rem", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <Card.Body className="text-center">
            <Image  />
            <Card.Title><Name /></Card.Title>
            <Price />
            <Description />
          </Card.Body>
        </Card>
      </Container>

      {/*Message de bienvenue*/}
      <div className="mt-4 text-center w-100">
        {firstName ? (
          <>
            <h3>Bonjour, {firstName} !</h3>
            <img
              src="https://via.placeholder.com/100x100?text=👋"
              alt="Hello"
              className="mt-2"
            />
          </>
        ) : (
          <h3>Bonjour !</h3>
        )}
      </div>

    </div>
  );


}



export default App;