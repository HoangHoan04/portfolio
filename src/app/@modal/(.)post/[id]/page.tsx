import { PostModal } from "@/components/modal/post-modal";

export default async function PostInterceptModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PostModal id={id} />;
}
