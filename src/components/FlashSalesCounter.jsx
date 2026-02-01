import { CountdownCircleTimer } from "react-countdown-circle-timer";

const FlashSalesCounter = () => {
  return (
    <div className="relative">
      <CountdownCircleTimer
        isPlaying
        duration={30 * 60 * 60} // 30 hours in seconds
        colors={["#ec4899"]} // Purple/pink for passed section
        trailColor="#22222280" // Purple/pink for remaining section
        size={200}
        strokeWidth={8}
        rotation="counterclockwise"
      >
        {({ remainingTime }) => {
          const hours = Math.floor(remainingTime / 3600);
          const minutes = Math.floor((remainingTime % 3600) / 60);
          const seconds = remainingTime % 60;

          // Calculate the angle for the dot position
          const totalDuration = 30 * 60 * 60; // 30 hours
          const progress = (totalDuration - remainingTime) / totalDuration;
          const angle = progress * 360 - 90; // -90 to start from top
          const radius = 96; // Half of size (200/2) minus half stroke width (8/2)

          // Calculate dot position
          const dotX = 100 + radius * Math.cos((angle * Math.PI) / 180);
          const dotY = 100 + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <>
              <div className="text-4xl font-bold text-gray-800">
                {hours.toString().padStart(2, "0")}:
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </div>

              {/* Moving dot */}
              <div
                className="absolute w-3 h-3 bg-[#ec4899] rounded-full transition-all duration-1000 ease-linear"
                style={{
                  left: `${dotX}px`,
                  top: `${dotY}px`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            </>
          );
        }}
      </CountdownCircleTimer>
    </div>
  );
};

export default FlashSalesCounter;
