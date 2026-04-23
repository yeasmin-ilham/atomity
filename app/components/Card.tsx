export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-100 flex items-center justify-center p-6">

         {/* Aws */}
          <div className=" absolute top-0 left-0 flex flex-col items-center gap-2">
      <div
        className="w-40 h-40 bg-green-400 text-white flex items-center justify-center font-semibold"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
        Heptagon
      </div>
    </div>
      
        {/* Center Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center  border-4 border-green-200  w-full max-w-2xl">
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


        {/* Azure */}
        <div className="absolute top-0 right-0 flex flex-col items-center gap-2">
         <div
        className="w-40 h-40 bg-green-400 text-white flex items-center justify-center font-semibold"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
        Heptagon
      </div>
        </div>

        {/* GCP */}
        <div className=" absolute bottom-0 left-0 flex flex-col items-center gap-2">
          <div
        className="w-40 h-40 bg-green-400 text-white flex items-center justify-center font-semibold"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
        Heptagon
      </div>
        </div>

        {/* On-Premise */}
        <div className=" absolute bottom-0 right-0 flex flex-col items-center gap-2">
          <div
        className="w-40 h-40 bg-green-200 text-white flex items-center justify-center font-semibold"
        style={{
          clipPath:
            "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
        }}
      >
        Heptagon
      </div>
        </div>
    </main>
  );
}