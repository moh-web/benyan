import style from "./Sidebar.module.css";
import {NavLink } from "react-router-dom";

 function Sidebar({typing, focused}) {
    const links = [
        {icon: "fa-chart-bar", title: "status", path: "/"},
        {icon: "fa-users", title: "Users Management", path: "/users"},
        {icon: "fa-building", title: "PROJECTS Management", path: "/projects"},
        {icon: "fa-building", title: "Developers Management"},
        {icon: "fa-users", title: "Website CMS"},
        {icon: "fa-message", title: "Live Chat"},
        
    ]

  return (
    <aside className={`${style.sideBar} min-vh-85.7 p-3 text-white`}>
        <div className="fw-semibold px-4 mb-3 fs-4">
            Dashbard
        </div>
<nav className={`${style.nav}`}>
    {links.map((link, index) => (
        <NavLink to={link.path} className={`${style.navItem} d-flex align-items-center gap-3 p-2 text-decoration-none`} key={index}>
            <i className={`fa-solid ${link.icon}`}></i>
            <span>{link.title}</span>
            {link.title == "Users Management" && typing && focused && <p style={{fontSize: "0.7rem"}}>typing...</p>}
        </NavLink>
        
    ))}
</nav>
    </aside>
  )
}
export default Sidebar;
