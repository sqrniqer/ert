import MainpageProductShowcase from '../components/MainpageProductShowcase/MainpageProductShowcase'
import ProductSizesTable from '../components/ProductSizesTable/ProductSizesTable'

function Frontpage() {
    const List = [
      {
        L: 30,
        D: ['M4', 'M5', 'M6', 'M8', 'M10']
      }
    ]
    return (
      <div className="App">
        <MainpageProductShowcase  photo="/images/DIN931.png" Title='z łbem sześciokątnym'/>
        <ProductSizesTable 
        headers= {['l/d','M4', 'M5', 'M6', 'M8', 'M10']}
        rows = {List}
        />
        
      </div>
  
    );
}

export default Frontpage