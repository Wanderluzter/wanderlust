//Skeleton para loading screen enquanto as páginas estão sendo carregadas
export default function Skeleton() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Loading...</h1>
      <p className="mt-4 text-lg text-gray-600">
        Please wait while we load the content for you.
      </p>
    </div>
  );
}
