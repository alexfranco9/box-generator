import React, { useState } from "react"

const Form = () => {
    const [boxes, setBoxes] = useState([])
    const [color, setColor] = useState("")
    const [width] = useState("100px")
    const [height] = useState("100px")

    const handleSubmit = (e) => {
        e.preventDefault()

        setBoxes([...boxes, <div className="form-check-inline" style={{ backgroundColor: color, width: width, height: height }} />])
    }

    return (
        <div className="col">
            <form onSubmit={handleSubmit}>
                <label htmlFor="color"> Color: </label>
                <input className="form-control" type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <br />
                <input type="submit" value="Add" className="btn btn-primary" />
            </form>
            <br/>
            <div> {boxes} </div>
        </div>
        
    )
}

export default Form
