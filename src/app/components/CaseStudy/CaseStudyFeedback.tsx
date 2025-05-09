
interface IProps {
  feedback: string;
  nameWithDesignation: string;
  clientImage?: string;
}

const CaseStudyFeedback = ({
  feedback,
  nameWithDesignation,
  clientImage,
}: IProps): JSX.Element => {
  return (
    <div className="bg-hero py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-10">
        <div>
          <p className="font-plex-sans text-black leading-8 font-semibold text-center lg:text-justify italic">
            {feedback}
          </p>
          <div className="mt-6">
            <h3 className="font-helvetica text-xl text-primary font-bold text-center md:text-left">
              – {nameWithDesignation}
            </h3>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <img
            className="w-[150px] md:w-[220px] h-auto"
            src={clientImage}
            alt="Client Feedback"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyFeedback;
