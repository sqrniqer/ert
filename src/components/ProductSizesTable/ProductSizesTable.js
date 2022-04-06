// ogarnac jakos jak zrobic komponent ktory generowalby tabele 
let available_style = {
  width: "110px",
  height: "30px",
  border: "1px solid black",
  display: "inline-block",
  background: "#36CF66",
}
let temp_unavailable_style = {
  width: "110px",
  height: "30px",
  border: "1px solid black",
  display: "inline-block",
  background: "#F2DB05",
}
let unavailable_style = {
  width: "110px",
  height: "30px",
  border: "1px solid black",
  display: "inline-block",
  background: "#E01C15",
}

function TableCell(props) {
  const isAvailable = props.Value;
  if (isAvailable === "x") {
    let comp_style = unavailable_style
  }
  else {
    let comp_style = available_style
  }
  return(
    <div className={"TableCell-" + props.cellFunction + "-" + props.Value} style={available_style}>
      {props.Value}
    </div>
  )

}

let cell_container_style = {
  display: "flex",
  flexDirection: "column",
}

const ProductSizesTable = (props) => {
    const headers = props.headers;
    const rows = props.rows
    const listHeaders = headers.map((header) => <TableCell cellFunction="Header" Value={header}/>);

      
    const listRows = rows.map((row) => 
    <div className={"TableCell-Row-Container-" + row.D} style={cell_container_style}>

      {row.L.map((row) => <TableCell cellFunction="Row-Cell" Value={row}/>)}

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