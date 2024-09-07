import Icon from "@/components/Icon";

export default async function Loading() {
  return (
    <main className="flex flex-col p-2 gap-y-2 overflow-y-hidden">
      <div className="shadow rounded-md">
        <div className="w-full flex-row p-2 rounded">
          <div className="flex flex-row gap-2">
            <div className="flex grow flex-col justify-center overflow-hidden text-ellipsis">
              <div className="line-clamp-1 text-lg text-base-content">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full max-w-xs input-bordered"
                />
              </div>
            </div>

            <button className="flex justify-center aspect-square w-12 h-12 items-center btn btn-primary p-1">
              <Icon name="PlusCircleIcon" />
            </button>
          </div>
        </div>
      </div>
      <div className="skeleton w-full h-16" />
      <div className="skeleton w-full h-16" />
      <div className="skeleton w-full h-16" />
      <div className="skeleton w-full h-16" />
      <div className="skeleton w-full h-16" />
      <div className="skeleton w-full h-16" />
      <div className="skeleton w-full h-16" />
      <div className="skeleton w-full h-16" />
    </main>
  );
}
