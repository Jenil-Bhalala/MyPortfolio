import './product.css';

const Product = ({img, live, title, codelink}) => {
  return (
    // <div className="p">
    //     <div className="p-browser">
    //         <div className="p-circle"></div>
    //         <div className="p-circle"></div>
    //         <div className="p-circle"></div>
    //     </div>
    //     <a href={link} target="_blank" rel="noreferrer">
    //         <img src={img} alt="" className="p-img"/>
    //     </a>
    // </div>
    <div className="p">
        <div className="p-img-div">
            <img src={img} alt="" className='p-img'/>
        </div>
        <h3 className="p-title">{title}</h3>
        <div className="p-btns">
            <a href={codelink} className="p-btn1" target="_blank">GitHub</a>
            <a href={live} className="p-btn2" target="_blank">Live Demo</a>
        </div>
    </div>
  )
}

export default Product