
const Filter = (props) => {

  return (
    <>
      <div class="w-full shadow p-5 mt-4 rounded-lg bg-white">
        <div class="relative">
          <input
            type="text"
            placeholder="Search by document title..."
            class="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            value={props.title}
            onChange={(e) => {
                props.setFilter(e.target.value);
            }}
          />
        </div>

        <div class="flex items-center justify-between mt-4">
          <p class="font-medium">Filters</p>

        </div>
        <div>
          <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              onChange={(e) => {
                props.setFilterTag(e.target.value);
              }}
            >
              <option value="">All Tags</option>
              {props.Tags.map((tag) => {
                return <option value={tag}>{tag}</option>;
              })}
            </select>

            <select
              class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              onChange={(e) => {
                props.setFilterCategories(e.target.value);
              }}
            >
              <option value="">All Categories</option>
              {props.Categories.map((categories) => {
                return <option value={categories}>{categories}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
