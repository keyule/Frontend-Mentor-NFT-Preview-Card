import { cn } from "../../utils/cn";
 
export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <>
      {meteors.map((_, idx) => {
        const fromLeft = Math.random() < 0.5; // 50% chance to start from the left
        const positionValue = Math.floor(Math.random() * (400 - -400) + -400);
        
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              fromLeft ? "rotate-[305deg]" : "rotate-[215deg]", // Adjust rotation based on the starting side
              className
            )}
            style={{
              top: fromLeft ? positionValue + "px" : 0,
              left: fromLeft ? 0 : positionValue + "px",
              animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
            }}
          ></span>
        );
      })}
    </>
  );
};