import Link from "next/link";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div>
          <p className="footerEyebrow">NestlyDigital</p>
          <h2>Starter websites for service businesses that need to launch fast.</h2>
        </div>

        <div className="footerLinks">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footerMeta">
          <p>{company.email}</p>
          <p>{company.phone}</p>
          <p>{company.address}</p>
        </div>
      </div>
    </footer>
  );
}
