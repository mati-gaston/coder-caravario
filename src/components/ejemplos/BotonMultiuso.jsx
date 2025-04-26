const BotonMultiuso = (props) =>     {

return(

    <button className=  {props.estilo}onClick={props.manejadorDelOnclick}>
            {props.texto}
    </button>
)


}
export default BotonMultiuso 