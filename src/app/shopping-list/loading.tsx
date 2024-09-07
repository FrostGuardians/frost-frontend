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
                  placeholder="Your Item"
                  disabled
                  className="input input-bordered w-full disabled"
                />
              </div>
            </div>
            <button className="add-button btn-disabled">
              <Icon name="PlusIcon" />
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
