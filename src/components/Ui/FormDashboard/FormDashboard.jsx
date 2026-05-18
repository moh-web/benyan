import { useEffect, useState } from "react";


export default function FormDashboard() {
    const [typing, setTyping] = useState(true);
    const [focused, setFocused] = useState(false);
    console.log(type);
          const handleFocus = (e) => {
            if (e.target.value.length > 0) {
              setTyping(true);
            }
        }
   
        const input = document.getElementById("exampleInputEmail1");
        input.addEventListener("focus", handleFocus);
  return (
    <div classNameName='container'>
        <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onFocus={()=>setFocused(true)} onChange={handleFocus} onBlur={()=>setFocused(false)}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
