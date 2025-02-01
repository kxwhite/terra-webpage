// import React from "react";
// import "./Footer.css";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import TerraLogo from "../../assets/TerraLogo.webp"

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <img className="footer-logo-img" src={TerraLogo} alt="Terra API Logo" />

//         <div className="footer-links">
//           <div className="footer-column">
//             <h3>Products</h3>
//             <ul>
//               <li>Integrations</li>
//               <li>Authentication</li>
//               <li>Mobile Development</li>
//               <li>Documentation</li>
//               <li>GraphAPI</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Documentation</h3>
//             <ul>
//               <li>API</li>
//               <li>SDK</li>
//               <li>Quickstart</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Community</h3>
//             <ul>
//               <li>Community</li>
//               <li>Podcast</li>
//               <li>Github</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Company</h3>
//             <ul>
//               <li>About</li>
//               <li>Careers</li>
//               <li>Customers</li>
//               <li>Cookies Policy</li>
//               <li>GDPR</li>
//               <li>Privacy Policy</li>
//               <li>Terms of Purchase</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <div className="social-icons">
//           <FaLinkedin className="icon" />
//           <FaTwitter className="icon" />
//           <FaGithub className="icon" />
//         </div>
//         <p>© Terra API. 2025 — All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import TerraLogo from "../../assets/TerraLogo.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="footer-logo-img" src={TerraLogo} alt="Terra API Logo" />

        <div className="footer-links">
          {[
            {
              title: "Products",
              links: [
                "Integrations",
                "Authentication",
                "Mobile Development",
                "Documentation",
                "GraphAPI",
              ],
            },
            { title: "Documentation", links: ["API", "SDK", "Quickstart"] },
            { title: "Community", links: ["Community", "Podcast", "Github"] },
            {
              title: "Company",
              links: [
                "About",
                "Careers",
                "Customers",
                "Cookies Policy",
                "GDPR",
                "Privacy Policy",
                "Terms of Purchase",
              ],
            },
          ].map((section, index) => (
            <div key={index} className="footer-column">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <FaLinkedin className="icon" />
          <FaTwitter className="icon" />
          <FaGithub className="icon" />
        </div>
        <p>© Terra API. 2025 — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
