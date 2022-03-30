import './ProductSizesTable.css'

// ogarnac jakos jak zrobic komponent ktory generowalby tabele 




let available = {
  width: "110px",
  height: "30px",
  background: "#36CF66",
}
let temp_unavailable = {
  width: "110px",
  height: "30px",
  background: "#F2DB05",
}
let unavailable = {
  width: "110px",
  height: "30px",
  background: "#E01C15",
}

function TableCell(props){
    return (
        <div 
        className={"TableCell-" + props.diameter + "x" + props.length} 
        style={props.status}>
        </div>
    )
}
let header_style = {
  width: "110px",
  height: "30px",
  border: "1px solid black",
  display: "inline-block"
}


const ProductSizesTable = (props) => {
    const headers = props.headers;
    const rows = props.rows
    const listHeaders = headers.map((header) =>
      <div
      className={"TableCell-Header-" + header} 
      style={header_style}>{header}</div>
    );
    return (
      <ul>{listHeaders}</ul>
    );
  }

  export default ProductSizesTable