
const HeroSkeleton = (): JSX.Element => {
  return (
    <div className="max-w-3xl mx-auto min-h-[90vh] flex flex-col justify-center items-center gap-6">
      <div>
        <div className="space-y-4">
          <div className="flex justify-center items-center">
            <div className="w-[200px] md:w-[450px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-[300px] md:w-[500px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
          </div>
          <div className="flex justify-center">
            <div className="w-[100px] md:w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="md:mt-12 w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-2">
          <div className="w-[70px] bg-[#E5E5E7] rounded-md text-white h-[60px] animate-pulse"></div>
          <div className="space-y-2">
            <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
            <div className="w-[250px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="w-[70px] bg-[#E5E5E7] rounded-md text-white h-[60px] animate-pulse"></div>
          <div className="space-y-2">
            <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
            <div className="w-[250px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="w-[70px] bg-[#E5E5E7] rounded-md text-white h-[60px] animate-pulse"></div>
          <div className="space-y-2">
            <div className="w-[200px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
            <div className="w-[250px] bg-[#E5E5E7] rounded text-white h-[20px] animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
