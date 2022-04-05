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
        <div className={"TableCell-" + props.diameter + "x" + props.length} style={props.status}> </div>
    )
}
let header_style = {
  width: "110px",
  height: "30px",
  border: "1px solid black",
  display: "inline-block"
}
let cell_container_style = {
  display: "flex",
  flexDirection: "column",
}

const ProductSizesTable = (props) => {
    const headers = props.headers;
    const rows = props.rows
    const listHeaders = headers.map((header) =>
      <div className={"TableCell-Header-" + header} style={header_style}> {header} </div>);


      
    const listRows = rows.map((row) => 
    <div className={"TableCell-Row-Container-" + row.D} style={cell_container_style}>

    {row.L.map((row) => <div className={"TableCell-Row-Cell-" + row} style={header_style} >{row} </div>)}

    </div>)

    let ul_style = {
      display: "flex",
      padding: "0px",
      margin: "0px",
    }
    let table_main_container_style = {
      padding: "0px",
      margin: "0px",
    }
    let table_main_wrapper_style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
    return (
      <div className="Table-Wrapper" style={table_main_wrapper_style}>
        <div style={table_main_container_style}>

          <div><ul style = {ul_style}>{listHeaders}</ul></div>
          <div><ul style = {ul_style}>{listRows}</ul></div>

        </div>
      </div>);
  }

  export default ProductSizesTable