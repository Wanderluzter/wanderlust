//Página do post individual, usando slug para identificar o post específico
export default function Post({ params }: { params: { slug: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Blog Post: {params.slug}</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is a placeholder page for the blog post with the slug:{" "}
        {params.slug}. You can replace this content with the actual details of
        the blog post, such as the title, content, author information, and other
        relevant details.
      </p>
    </div>
  );
}
