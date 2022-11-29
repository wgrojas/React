import Table from "react-bootstrap/esm/Table"
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Videos() {
  let { data } = useParams();
  let [video, setVideo] = useState([]);

 setVideo(data)

  return (
    <div>
      <h1>Videos</h1>
      <Table striped bordered hover className="table table-bordered border-primary mt-5 container table-light">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Video</th>
            <th>Descripcion</th>
          </tr>
        </thead>

        <tbody >

          {video.item.map(item =>

            <tr className='body'>
              <td>{item.titulo}</td>
              <td >{item.item.video}</td>
              <td>{item.item.descripcion}</td>
            </tr>
          )}


        </tbody>
      </Table>
    </div>
  )
}
