
import A from "../assets/1.png"
import globe from "../assets/4.png"
import Image from "next/image"
   
   export default function Navbar(){
    return(
        <div>
           {/* ── Navbar ── */}
            <nav className="flex items-center justify-between px-8 py-2 bg-gray-100 relative z-30 backdrop-blur-2xl">
        <div className="flex items-center gap-2">  
        <Image
        src={globe}
        alt="Image"
        className="object-cover w-5 h-5"/>
        <span className="text-[15px] font-bold text-primary tracking-[0.18em] uppercase italic">Atomity</span>
        </div>
        <span className="text-[13px] text-gray-800 tracking-tight hidden md:block">cloud Intelligence for Sovereign and Sustainable AI workLoads</span>
        <div>
            <Image
            src={A}
            alt="Image"
            className="object-cover w-5"/>
        </div>
      </nav>
        </div>
    )
   }