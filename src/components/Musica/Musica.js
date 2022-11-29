import Music from "./musica.json"
import Curso from "./Curso"
import Table from 'react-bootstrap/esm/Table';


export default function Musica() {

    return (

        <div className="container text-center ">
            <h1>Mi Ayuda Musical</h1>

            <Table striped bordered hover className="table table-bordered border-primary mt-5 container table-light">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Video</th>


                    </tr>
                </thead>

                
                    <tbody>

                    {Music.map(dato =>
                        <Curso item={dato}/>
             

                    )}

                    </tbody>
            </Table>

        </div>

    );
}


