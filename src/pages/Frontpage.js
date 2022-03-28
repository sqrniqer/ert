import MainpageProductShowcase from '../components/MainpageProductShowcase/MainpageProductShowcase'
import ProductSizesTable from '../components/ProductSizesTable/ProductSizesTable'

function Frontpage() {
    return (
      <div className="App">
        <MainpageProductShowcase  photo="/images/DIN931.png" Title='z łbem sześciokątnym'/>
        <ProductSizesTable/>
      </div>
  
    );
}

export default Frontpage