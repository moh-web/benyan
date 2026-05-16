import style from "./CardStatus.module.css"

export default function CardStatus() {
  return (
    <div className={`${style.cardStatus} d-flex align-items-center justify-content-around `}>
                            {/* icon parent */}
                             
                                <div className={style.icon}>
    
                                <i className="fa-solid fa-building "></i>
                                </div>
    
                            {/* info*/}
                            <div className={`${style.info} d-flex align-items-center flex-column`} >
    
                            <span className="counter">120</span>
                            <span className={style.title}>projects</span>
                            </div>
                            </div>
  )
}
