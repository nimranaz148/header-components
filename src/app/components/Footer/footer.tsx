import React from 'react'
import cssStyle from "./footer.module.css"
import Link from 'next/link';

const footer = () => {
  return (
    <footer className={cssStyle.footer}>
    <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
    <ul className={cssStyle.footerlinks}>
      <li><Link href="#">Privacy Policy</Link></li>
      <li><Link href="#">Terms of Service</Link></li>
      <li><Link href="#">Contact Us</Link></li>
    </ul>
  </footer>
);
};

export default footer
