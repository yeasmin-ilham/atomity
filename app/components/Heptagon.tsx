type HeptagonProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Heptagon({ children, className = "" }: HeptagonProps) {
  return (
    <div
      className={`
        w-20 h-20 
        md:w-35 md:h-35 
        bg-gradient-to-r from-gradient-start to-gradient-end
        shadow-lg transition-all duration-300 cursor-pointer hover:scale-105
        ${className}
      `}
      style={{
        clipPath:
          "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
      }}
    >
      {children}
    </div>
  );
}