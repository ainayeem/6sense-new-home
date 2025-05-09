
const TeamSkeleton = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="">
          <div className="md:mt-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 place-items-center gap-x-8 gap-y-4">
            <div className="space-y-2">
              <div className="w-[304px] md:w-[362px]  bg-[#E5E5E7] text-white h-[382px] md:h-[454px] animate-pulse"></div>
              <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="w-[304px] md:w-[362px]  bg-[#E5E5E7] text-white h-[382px] md:h-[454px] animate-pulse"></div>
              <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="w-[304px] md:w-[362px]  bg-[#E5E5E7] text-white h-[382px] md:h-[454px] animate-pulse"></div>
              <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 place-items-center gap-x-8 gap-y-4">
            <div className="space-y-2">
              <div className="w-[304px] md:w-[362px]  bg-[#E5E5E7] text-white h-[382px] md:h-[454px] animate-pulse"></div>
              <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="w-[304px] md:w-[362px]  bg-[#E5E5E7] text-white h-[382px] md:h-[454px] animate-pulse"></div>
              <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="w-[304px] md:w-[362px]  bg-[#E5E5E7] text-white h-[382px] md:h-[454px] animate-pulse"></div>
              <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSkeleton;
