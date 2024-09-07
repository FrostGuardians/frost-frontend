export default async function Loading() {
  return (
    <main className="flex flex-col p-2 gap-y-2 overflow-y-hidden">
      <div className="skeleton w-full aspect-square" />
      <h2 className="text-lg font-bold">Ingredients</h2>
      <ul className="flex flex-col gap-y-2">
        <div className="skeleton w-full h-16" />
        <div className="skeleton w-full h-16" />
      </ul>
      <h2 className="text-lg font-bold">Instructions</h2>
      <div className="skeleton w-full aspect-square" />
    </main>
  );
}
