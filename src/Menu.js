function Menu(props){
    return(
        <div>
            <ul>
            {props.menu.map(el =><li>{el}</li>)}
            </ul>

        </div>

    );
}
export default Menu;