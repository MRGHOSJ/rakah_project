const DocumentSelf = (props) => {
  return (
    <a href={props.url} target="_blank">
      <div class="rounded overflow-hidden shadow-lg">
        <img
          class="w-auto mx-auto h-96"
          src={props.img}
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.title}</div>
          <p class="text-gray-700 text-base">
            {props.sub}
          </p>
        </div>
      </div>
    </a>
  );
};

export default DocumentSelf;
