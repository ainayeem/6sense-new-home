
interface IProps {
  title: string;
  overviewImage: string;
  overviewParagraphs: string[];
}

const ProjectOverview = ({
  title,
  overviewImage,
  overviewParagraphs,
}: IProps): JSX.Element => {
  return (
    <div className="max-w-7xl mx-auto py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-center text-4xl md:text-5xl md:leading-tight font-bold capitalize text-primary">
          {title}
        </h1>
      </div>

      <div className="py-6 px-4 md:px-0 text-center space-y-4 max-w-6xl mx-auto">
        {overviewParagraphs.map((overview, index) => {return (
          <p key={index}>{overview}</p>
        )})}
      </div>

      <div className="max-w-6xl mx-auto">
        <img src={overviewImage} alt={title} />
      </div>
    </div>
  );
};

export default ProjectOverview;
