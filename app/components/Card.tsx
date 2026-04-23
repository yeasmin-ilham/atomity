export default function Card() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl flex items-center justify-center">

        <div className="relative">

          {/* Center Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-4 border-green-200">
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
                  <div className={`w-9 ${item.h} bg-green-400 rounded-md`} />
                  <span className="text-xs text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AWS - top left */}
          <div className="absolute -top-20 -left-20 md:-top-40 md:-left-40 lg:-top-50 lg:-left-50">
             <div
        className=" w-20 h-20 md:w-40 md:h-40 bg-green-400"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
        Heptagon
      </div>
          </div>

          {/* Azure - top right */}
          <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 lg:-top-50 lg:-right-50">
                <div
        className="w-20 h-20 md:w-40 md:h-40 bg-green-400"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
        Heptagon
      </div>
          </div>

          {/* GCP - bottom left */}
          <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 lg:-bottom-50 lg:-left-50">
              <div
        className="w-20 h-20 md:w-40 md:h-40 bg-green-400"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
        Heptagon
      </div>
          </div>

          {/* On-Prem - bottom right */}
          <div className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 lg:-bottom-50 lg:-right-50">
               <div
        className="w-20 h-20 md:w-40 md:h-40 bg-green-400"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
        Heptagon
      </div>
          </div>

        </div>
      </div>
    </main>
  );
}
