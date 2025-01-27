import Posts from "@/components/Posts/Posts";
import PostsSection from "@/components/Posts/PostsSection";
import { postsData } from "@/components/Posts/postsData";

export default function PostsPage() {
  return (
    <main>
      <PostsSection post={postsData[0]} />
    </main>
  );
}
