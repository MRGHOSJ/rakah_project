const ProjectCard = (props) => {
  return (
    <div className="w-80 h-full">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md h-full">
        <img
          className="rounded-t-lg p-8 mx-auto h-2/4"
          src={
            props.coming_soon
              ? "https://media.istockphoto.com/vectors/coming-soon-stamp-imprint-seal-template-vector-stock-illustration-vector-id1314780559?b=1&k=20&m=1314780559&s=170667a&w=0&h=XYj99bFQ4wgNU6xLXoqgme9inaGXcOpkBWdkKDtcO_c="
              : props.image
          }
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <div className="grid grid-cols-3 text-center">
            <span className="bg-orange-500 text-white-300 text-sm font-medium mr-2 mb-1 px-2.5 py-0.5 rounded">
              {props.level}
            </span>
            {props.programingLanguage ? (
              props.programingLanguage.map((language) => {
                return (
                  <span className="mb-1 bg-green-500 text-white-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                    {language}
                  </span>
                );
              })
            ) : (
              <></>
            )}
          </div>
          <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
            {props.sub}
          </p>
          {props.coming_soon ? null : (
            <a
              href={props.coming_soon ? "" : props.href}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              {props.href.includes("tutored") ? "Order now" : "Explore"}

              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
