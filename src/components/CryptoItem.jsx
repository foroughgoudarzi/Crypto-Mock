import Logo from './Logo'
import Price from './Price'


function CryptoItem(props) {
  

return (
    <>
      <div className="container-fluid d-flex flex-row w-100 border rounded-3 p-3 m-3 border-black bg-light border-2 align-items-center">
      <div className='col-3'>
        <Logo name={props.name} abr={props.abr} size={props.size}/>
      </div>

      <div className='col-5'>
        <Price abr={props.abr.toUpperCase()} />
      </div>

      <div className='col-2' >
        <button className='btn btn-success w-75 p-0 pt-2 pb-2' type="button" name={props.abr}>Buy</button>
      </div>

      <div className='col-2'>
        <button  className='btn btn-danger w-75 p-0 pt-2 pb-2' type="button" onClick={props.handleRemove} name={props.abr} >Remove</button>
      </div>

      </div>
    </>
  );
}

export default CryptoItem;