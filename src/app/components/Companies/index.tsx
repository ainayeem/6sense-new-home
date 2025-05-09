"use client";

interface IOrgProps {
  id: number;
  image: string;
  alt: string;
}

interface ICompayProps {
  organizations: IOrgProps[];
  title?: string;
  subtitle: string;
  pageName: string;
}

const Companies = ({
  organizations,
  title,
  subtitle,
  pageName,
}: ICompayProps): JSX.Element => {
  return (
    <div className={`${pageName === "case-studies" && "bg-lightGray"}`}>
      <div className={`${pageName === "home" ? "mt-12" : "mt-0 pt-14"}  px-5`}>
        {title && (
          <h2 className="uppercase text-center text-primary font-bold text-2xl pb-2">
            {title}
          </h2>
        )}
        {pageName === "home" && (
          <p className="text-center text-textSecondary text-base">{subtitle}</p>
        )}
        <div
          className={`mt-10 flex gap-5 md:gap-${
            pageName === "case-studies" ? "14" : "10"
          } flex-wrap justify-center items-center`}
        >
          {organizations.map((org) => {return (
            <img key={org.id} src={org.image} alt={org.alt} />
          )})}
        </div>
        {pageName === "case-studies" && (
          <p className="text-center text-textSecondary text-base md:py-2 py-5">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Companies;
