import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
let NavButton_style = {

}

let Navbar_style = {
    width: "1170px",
    height: "40px",
    background: "#e9e9e9",
}

const NavButton = (props) => {
    return(
        <span 
        className={"NavButton-" + props.buttonName}
        style={NavButton_style}>
        <Link to={props.buttonName}>{props.buttonName}</Link>

        </span>
    )
}

function Navbar() {
    return(
        <div className="Navbar-container">
            <div 
            className="Navbar"
            style={Navbar_style}>


                <NavButton buttonName="O nas"/>
                <NavButton buttonName="Główna"/>
                <NavButton buttonName="Oferta"/>
                <NavButton buttonName="Baza wiedzy"/>
                <NavButton buttonName="Zapytania"/>
            </div>

        </div>
    )
}

export default Navbar