import '../infos/infos.css'

const Info = (props) => {
    const text = props.text;
    return ( 
        <div className="card">
            <p>
                {text}
            </p>
        </div>
     );
}
 
export default Info;