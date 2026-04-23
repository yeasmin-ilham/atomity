

import Image from "next/image";

import Img1 from "../assets/aws.png"
import Img2 from "../assets/blue.png"
import Img3 from "../assets/cloud.png"


export default function Card() {
  return (
    <main className="min-h-screen bg-secondary flex items-center justify-center p-6">
      <div className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl flex items-center justify-center">

        <div className="relative">

          {/* Center Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-4 border-primary-foreground">
            <div className="grid grid-cols-6 gap-6 items-end h-40">
              {[
                { label: "CPU", h: "h-32" },
                { label: "GPU", h: "h-12" },
                { label: "RAM", h: "h-24" },
                { label: "PV", h: "h-16" },
                { label: "Network", h: "h-20" },
                { label: "Cloud", h: "h-10" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className={` w-5 sm:w-9 ${item.h} bg-green-400 rounded-md`} />
                  <span className="text-xs text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AWS - top left */}
          <div className="absolute -top-20 -left-20 md:-top-40 md:-left-40 lg:-top-50 lg:-left-50">
             <div
        className="w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-gradient-start to-gradient-end"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
      </div>
      <Image
      src={Img1}
      alt="image" className="object-cover w-7 sm:w-8 lg:w-14"/>
          </div>

          {/* Azure - top right */}
          <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 lg:-top-50 lg:-right-50">
                <div
        className="w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-gradient-start to-gradient-end"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
      </div>
      <div className="flex flex-row items-center">
              <Image
      src={Img2}
      alt="image" className="object-cover w-5 sm:w-8 lg:w-11"/>
      <p className="text-blue-500 text-xs md:text-[18px]">Azure</p>
      </div>
          </div>

          {/* GCP - bottom left */}
          <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 lg:-bottom-50 lg:-left-50">
              <div
        className="w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-gradient-start to-gradient-end"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
      </div>
            <Image
      src={Img3}
      alt="image" className="object-cover w-9 sm:w-11 lg:w-18"/>
          </div>

          {/* On-Prem - bottom right */}
          <div className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 lg:-bottom-50 lg:-right-50">
               <div
        className="w-20 h-20 md:w-40 md:h-40 bg-gradient-to-r from-gradient-start to-gradient-end"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
      </div>
      <p className="font-semibold text-[14px]">On-Premise</p>
          </div>

        </div>
      </div>
    </main>
  );
}
