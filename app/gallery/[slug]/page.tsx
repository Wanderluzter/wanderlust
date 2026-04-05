//Página que carrega projetos individuais
export default function GalleryItem({ params }: { params: { slug: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Gallery Item: {params.slug}</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is a placeholder page for the gallery item with the slug:{" "}
        {params.slug}. You can replace this content with the actual details of
        the gallery item, such as images, descriptions, and other relevant
        information.
      </p>
    </div>
  );
}
