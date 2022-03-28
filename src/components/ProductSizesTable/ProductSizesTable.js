import './ProductSizesTable.css'
function TableCell(props){
    // co powinna zawierac komorka
    // śruby średnice i długość
    return (
        <div className={"TableCell-" + props.diameter + "x" + props.length} >
            
        </div>
    )
}


function ProductSizesTable() {
    return (
      <div className="product-main-table-container">
        <TableCell diameter="M8" length="140"/>
      </div>
  
    );
  }

  export default ProductSizesTable