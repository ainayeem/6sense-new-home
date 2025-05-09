import { IItemInfo } from "../../../../types/type";

interface IProps {
  paragraph: string;
  quoteLogo?: string;
  logo: string;
  name: string;
  designation: string;
  ourProcess: any;
  bgColor?: string;
  hasShadow?: boolean;
}

const Feedback = ({
  paragraph,
  quoteLogo,
  logo,
  name,
  designation,
  ourProcess,
  bgColor,
  hasShadow,
}: IProps): JSX.Element => {
  return (
    <>
      <div className="md:mx-10 my-9">
        <div
          className={`max-w-6xl mx-auto h-full ${
            hasShadow ? "md:shadow-custom-drop" : ""
          } ${bgColor ? bgColor : ""}`}
        >
          <div className="relative rounded-t-md py-12 px-4 lg:px-0">
            <div className="max-w-4xl mx-auto flex lg:gap-8 flex-col-reverse lg:flex-row lg:items-start">
              <img className="hidden lg:block lg:pt-2" src={logo} alt="Logo" />
              <div className="w-full">
                <div className="flex lg:gap-8 items-center">
                  <p className="font-plex-sans text-primary text-xl leading-8 font-semibold text-center lg:text-justify">
                    {paragraph}
                  </p>
                  {quoteLogo && (
                    <img
                      className="absolute right-10 bottom-28 hidden md:flex"
                      src={quoteLogo}
                      alt={quoteLogo ? "Quote" : ""}
                    />
                  )}
                </div>

                <div className="mt-10 text-center lg:text-left">
                  <img
                    className="block lg:hidden mx-auto"
                    src={logo}
                    alt="Logo"
                  />
                  <h3 className="font-helvetica text-sm text-primary font-bold">
                    {name}
                  </h3>
                  <p className="font-helvetica text-primary text-xs">
                    {designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block max-w-6xl mx-auto h-full rounded-b-md border-t border-t-[#D9D9D9] py-12 px-5 lg:px-0">
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-y-8">
                {ourProcess &&
                  ourProcess.length > 0 &&
                  ourProcess.map((item: IItemInfo) => {return (
                    <div
                      key={item.id}
                      className="w-full h-full flex flex-col items-center lg:items-start"
                    >
                      <div className="mb-4">
                        <img src={item.icon} alt={item.alt} />
                      </div>
                      <h3 className="font-bold text-nowrap">{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  )})}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
