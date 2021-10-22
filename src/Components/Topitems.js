import {ProgressBar} from "react-bootstrap"
import "./Topitems.css"
const Topitems = ({name,row,number}) => {
    return (
        <div className={"classementitem"}>
            <span>{number}</span>
            <div>
            <h4>{name}</h4>
            <ProgressBar striped variant={row>90 ? "success" : row>70 ? "info" : row>50 ? "warning": "danger"} now={row} />
            </div>
        </div>
    )
}

export default Topitems
