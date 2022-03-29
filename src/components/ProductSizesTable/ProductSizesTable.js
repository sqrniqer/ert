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

function ProductSizesTable(props) {
    let headers = [props.headers]
    let rows = [props.rows]
    
    return (
      <div className="product-main-table-container">
        {props.headers}
        {props.rows}

        <TableCell diameter="M8" length="140" status={available}/>
        <TableCell diameter="M8" length="140" status={temp_unavailable}/>
        <TableCell diameter="M8" length="140" status={unavailable}/>
      </div>
  
    );
  }

  export default ProductSizesTable