import '../MainpageProductShowcase/MainpageProductShowcase.css'
function MainpageProductShowcase (props){
    return(
    <div className="container-wrapper">
        <div className="text-wrapper">
            <p className="text-title">{props.Title}</p>
        </div>
        <div className="picture-wrapper">
            <img src={props.photo} alt=''/>
        </div>
    </div>)
}
export default MainpageProductShowcase