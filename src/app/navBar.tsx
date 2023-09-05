import Link from "next/link";
import "./navBar.css";

export default function NavBar() {
  return (
    <div className="navBarMainContainer">
      <div className="navBarLeft">
        <Link href="/">Commissary.com</Link>
      </div>
      <div className="navBarCenter"></div>
      <div className="navBarRight">
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </div>
  );
}
