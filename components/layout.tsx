// import { GeistSans } from "geist/font/sans";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/navbar";
import "../app/globals.css"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`bg-background text-foreground `}>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center">
          {children}
        </div>
        <Footer />
      </div>
    );
}