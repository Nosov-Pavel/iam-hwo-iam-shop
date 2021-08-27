function Menu(props){
    return(
        <div>
            <ul>
            {props.name.map(el =><li>{el}</li>)}
            </ul>

        </div>

    );
}
export default Menu;