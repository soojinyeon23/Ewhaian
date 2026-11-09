function Card(props) {
    const {title, backgroundColor, children} = props;

    return (
        <div 
            style= {{
                margin: 8, 
                paddings: 8, 
                borderRadiu: 8, 
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
        );
}

export default Card;