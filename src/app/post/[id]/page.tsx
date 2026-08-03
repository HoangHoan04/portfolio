import { PostDetailContent } from "@/components/modal/post-modal";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className="px-4 py-6 md:px-6">
      <PostDetailContent id={id} />
    </div>
  );
}
