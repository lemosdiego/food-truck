import Link from "next/link";

interface CtaProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function Cta({ children, href, className }) {
  return (
    <Link className={`cta ${className}`} href={href}>
      {children}
    </Link>
  );
}
