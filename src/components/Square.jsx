
const Square = ({value, children}) =>{
    console.log(children)
    return (
        <div>
            {value}
            <h5>Children will be render below</h5>
            {children}
        </div>
    )
}

export default Square;