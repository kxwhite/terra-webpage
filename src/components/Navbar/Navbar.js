import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/TerraLogo.webp'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const tabs = ["Integrations", "Products", "Resources", "Company", "Pricing"]

  // const tabs = [
  //   { title: "Integrations" },
  //   {
  //     title: "Products",
  //     details: [
  //       {
  //         subtitle: "Integration",
  //         items: [
  //           { tabname: "Unified API", icon: "Api" },
  //           { tabname: "SDK", icon: "Computer" },
  //           { tabname: "Authentication", icon: "Login" },
  //           { tabname: "Streaming", icon: "Stream" },
  //           { tabname: "Blood Report API", icon: "Bloodtype" },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Resources",
  //     details: [
  //       {
  //         subtitle: "Scale",
  //         items: [{ tabname: "Enterprise", icon: "LocationCity" }],
  //       },
  //     ],
  //   },
  //   {
  //     title: "Company",
  //     details: [
  //       {
  //         subtitle: "About",
  //         items: [{ tabname: "Customers", icon: "Person" }, { tabname: "Careers", icon: "Work"}, { tabname: "Support", icon: "SupportAgent"}],
  //       },
  //     ],
  //   },
  //   { title: "Pricing" },
  // ];


  return (
    <nav className='nav-main'>
      <div className="nav-left">
        <img src={Logo} alt="Terra API Logo" className='nav-logo'/>
        <div className='nav-tabs'>
          {tabs.map((tab, i) => {
            return (
              <p key={i} className='nav-tab'>{tab}</p>
            )
          })}
        </div>
      </div>
      <div className="nav-right">
        <a href='#' className='nav-link nav-tab'>Login</a>
        <button className='nav-btn'>Get started</button>
        <div className="nav-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      {menuOpen && (
        <div className="mobile-menu">
          {tabs.map((tab, i) => (
            <p key={i} className="mobile-menu-item">{tab}</p>
          ))}
          <a href="#" className="mobile-menu-item">Login</a>
          <button className='mobile-menu-btn'>Get started</button>
        </div>
      )}
      </div>

    </nav>
  )
}
