

import CardStatus from '../../Ui/cardstatus/CardStatus'


export default function Status() {
  return (
    <section>
        <div className="container">
           <div className="row mt-5">
          
           
         
                <div className="col-12 col-md-3">
                    {/*parent card  */}
                    <CardStatus number={120} title="Projects"/>
                    </div>    
                <div className="col-12 col-md-3">
                    {/*parent card  */}
                    <CardStatus number={150} title="Users"/>
                    </div>    
                <div className="col-12 col-md-3">
                    {/*parent card  */}
                    <CardStatus number={200} title="Developers"/>
                    </div>    
                <div className="col-12 col-md-3">
                    {/*parent card  */}
                    <CardStatus number={50} title="Blogs"/>
                    </div>    
           </div>
                
              
                
            
        </div>
    </section>
  )
}
