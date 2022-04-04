import MainpageProductShowcase from '../components/MainpageProductShowcase/MainpageProductShowcase'
import ProductSizesTable from '../components/ProductSizesTable/ProductSizesTable'
import Navbar from '../components/navbar/Navbar'
function Frontpage() {
    const headersList = ['l/d','M3,5', 'M4,2', 'M4,8']
    const rowList = [
      {
        D: 'l/d',
        L: [25, 35, 45, 55, 70, 90, 100, 120]
      },
      {
        D: 'M3,5',
        L: [25, 35, 45, 55, "x", "x", "x", "x"]
      },
      {
        D: 'M4,2',
        L: ["x", "x", "x", "x", 70, 90, "x", "x"]
      },
      {
        D: 'M4,8',
        L: ["x", "x", "x", "x", "x", "x", 100, 120]
      }
    ]
    return (
      <div className="App">
        <Navbar/>
        <MainpageProductShowcase  photo="/images/DIN931.png" Title='z łbem sześciokątnym'/>
        <ProductSizesTable 
        headers= {headersList}
        rows = {rowList}
        />
              
      </div>
  
    );
}

export default Frontpage