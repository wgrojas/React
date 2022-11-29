import React from 'react';
import Table from 'react-bootstrap/esm/Table';
import Item from './Item'
import manzana from '../imagen/manzana.jpg'
import pera from '../imagen/pera.jpg'
import uva from '../imagen/uva.jpg'


class Carrito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  }
  render() {
    return (
      <div>
        <h1>Mi lista de compras</h1>

        <Table striped bordered hover className="table table-bordered border-primary mt-5 container table-light">
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>Imagen</th>

            </tr>
          </thead>
          <tbody >
            <Item cantidad={5} item={'manzana'} categoria={'fruta'} imagen={manzana} />
            <Item cantidad={9} item={'pera'} categoria={'fruta'} imagen={pera}/>
            <Item cantidad={10} item={'uva'} categoria={'fruta'} imagen={uva} className="colorUva"/>
          </tbody>
          </Table>
      </div>


    );
  }


}


export default Carrito
