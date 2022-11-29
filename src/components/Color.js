import './Color.css';


function Color(props) {

  return (
      <p className='contenido_color'> El color del auto es: {props.color} </p>
  );
}

export default Color;
