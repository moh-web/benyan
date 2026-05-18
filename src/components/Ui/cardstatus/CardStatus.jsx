import style from "./CardStatus.module.css"

export default function CardStatus({number,title}) {
  return (
    <div className={`${style.cardStatus} d-flex align-items-center justify-content-around `}>
                            {/* icon parent */}
                             
                                <div className={style.icon}>
    
                                <i className="fa-solid fa-building "></i>
                                </div>
    
                            {/* info*/}
                            <div className={`${style.info} d-flex align-items-center flex-column`} >
    
                            <span className="counter">{number}</span>
                            <span className={style.title}>{title}</span>
                            </div>
                            </div>
  )
}
