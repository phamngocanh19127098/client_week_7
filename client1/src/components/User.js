

const User = (props) => {
    return <article className="cart-item">
        <div>
            <span>{props.firstName}</span>
            <span>{props.lastName}</span>
            <br/>
        </div>
    </article>
}

export default User;