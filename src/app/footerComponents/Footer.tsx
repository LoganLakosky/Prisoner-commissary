import Link from "next/link";
import "./footer.css"
export default function Footer() {
  return <div className="footerMainContainer">
    <div className="footerLeft">
      <Link href="/contact">Contact Us!</Link>
    </div>
    <div className="footerRight"></div>
  </div>;
}
