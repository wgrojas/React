import "./musica.css"
export default function Curso(props) {
    return (

        <tr className='body'>
          
            <td><a href={`/videos/${props.item.videos}`}>{props.item.titulo}</a></td>

            <td><img src={props.item.imagen} className="imagen_item" ></img></td>
            {/* <Videos item={props.item.videos}/>  */}
        </tr>



    )

}