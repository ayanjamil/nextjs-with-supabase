import Link from "next/link";
import { IconFacebook, IconLinkedin, IconInstagram, IconPhone } from "./Icons";

const PHONE_NUMBER = "+91-9934999999";

export default function Footer() {
  return (
    <footer id="contact" className="w-full sm:px-10 px-2">
      <div className="bg-[var(--custom-color)] h-0.5 max-w-full mx-4 rounded"></div>
      <div className="w-full border-t border-foreground px-4 pb-6 py-2 flex sm:flex-row flex-col sm:justify-between justify-center items-center text-center text-xs">
        <p className="text-lg">&#169; Photographic society, BIT Mesra</p>
        <div className="flex flex-row items-center sm:gap-4 gap-8  mt-4  sm:mt-0  ">
          <Link
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center "
          >
            <IconFacebook />
          </Link>
          <Link
            href="https://www.google.com/_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <IconInstagram />
          </Link>
          <Link
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <IconLinkedin />
          </Link>
          <div className="flex items-center gap-1">
            <Link
              href={`tel:${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center"
            >
              <IconPhone />
            </Link>
            <p className="text-base whitespace-nowrap">{PHONE_NUMBER}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
