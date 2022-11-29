import Table from 'react-bootstrap/Table';
import "./item.css"

function Item(props) {
let customClass =""
if (props.className){
   customClass=props.className
}
  return (

    <tr className='body'>
      <td>{props.cantidad}</td>
      <td className={customClass}>{props.item}</td>
      <td>{props.categoria}</td>
      <td><img src={props.imagen} className="imagen_item"></img></td>
    </tr>



  );
}

export default Item;
