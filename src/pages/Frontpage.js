import MainpageProductShowcase from '../components/MainpageProductShowcase/MainpageProductShowcase'
import ProductSizesTable from '../components/ProductSizesTable/ProductSizesTable'

function Frontpage() {
    return (
      <div className="App">
        <MainpageProductShowcase  photo="/images/DIN931.png" Title='z łbem sześciokątnym'/>
        <ProductSizesTable 
        headers= {['M4', 'M5', 'M6', 'M8', 'M10']}
        rows = {['30', '35', '40', '45', '50', '55', '60', '65']}
        />
      </div>
  
    );
}

export default Frontpage