import Link from "next/link";

interface IProps {
  title: string;
  worksInfo: {
    id: number;
    name: string;
    slug: string;
    logo: string;
    imageSrc: string;
  }[];
}

const RelatedCases = ({ title, worksInfo }: IProps): JSX.Element => {
  return (
    <div className="bg-lightGray py-14">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-center text-4xl md:text-5xl md:leading-tight font-bold capitalize text-primary">
            {title}
          </h1>
        </div>
      </div>

      <div className="mt-7 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-x-8 gap-y-4 px-10 md:px-0">
          {worksInfo.slice(0, 3).map((work) => {return (
            <Link href={`/case-studies/${work.slug}`} key={work.id}>
              <div className="bg-white w-full h-auto shadow-md">
                <img src={work.imageSrc} className="w-full" alt={work.name} />
                <div className="p-5">
                  <img src={work.logo} alt={work.name} />
                  <h3 className="text-primary font-semibold">{work.name}</h3>
                </div>
              </div>
            </Link>
          )})}
        </div>
      </div>
    </div>
  );
};

export default RelatedCases;
