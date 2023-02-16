const DocumentSelf = (props) => {
  return (
    <a href={props.url} target="_blank">
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-auto mx-auto h-96" src={props.img} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.title}</div>
          {props.document ? (
            <span className="bg-orange-500 text-white-300 text-sm font-medium mr-2 mb-1 px-2.5 py-0.5 rounded">
              {props.document}
            </span>
          ) : (
            <></>
          )}

          {props.tags ? (
            props.tags.map((tag) => {
              return (
                <span className="mb-1 bg-green-500 text-white-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                  {tag}
                </span>
              );
            })
          ) : (
            <></>
          )}
          <p class="text-gray-700 text-base">{props.sub}</p>
        </div>
      </div>
    </a>
  );
};

export default DocumentSelf;
