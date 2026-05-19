



export default function FormDashboard({ setTyping, setFocused}) {
   
  
          const handleFocus = (e) => {
          
            if (e.target.value.length > 0) {
              setTyping(true);
            }else{
              setTyping(false)
            }
           
        }
   
    
        
  return (
    <div className='container'>
        <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleFocus} onFocus={()=> setFocused(true)} onBlur={()=>setFocused(false) } />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"  onChange={handleFocus} onFocus={()=> setFocused(true)} onBlur={()=>setFocused(false) } />
  </div>
  <div className="form-group form-check">
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
