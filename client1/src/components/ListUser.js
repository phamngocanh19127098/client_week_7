
import User from "./User";

const ListUser = (props) => {
    return (
        <section className="cart">
            
            <div>
                {props.actors.map((item) => {
                    return <User key={item.actorId} {...item}/>
                })}
            </div>
        </section>
    )
}

export default ListUser;