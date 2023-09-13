import Link from "next/link";
import "./navBar.css";

export default function NavBar() {
  /* 

    <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>

*/

  return (
    <div className="navBarMainContainer">
      <div className="navBarLeft">
        <Link href="/">Commissary.com</Link>
      </div>
      <div className="navBarCenter"></div>
      <div className="navBarRight"></div>
    </div>
  );
}
