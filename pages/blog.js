import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import BlogList from "../components/BlogList"

const query = `//groq
  *[_type == "blogpost"]
`;

function Blog(props) {
  const { blogData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !blogData) {
    return <Error statusCode={404} />;
  }
  const { data: blogs } = usePreviewSubscription(query, {
    initialData: blogData,
    enabled: preview || router.query.preview !== null,
  });

  console.log(blogs)

  return (
    <div className="my-8">
      <div className="mt-4">
        <BlogList blogs={blogs}  />
      </div>
    </div>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const blogData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      blogData,
    },
  };
}

export default Blog;
