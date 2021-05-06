import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import ProductPage from "../../components/ProductPage";
import { getClient, usePreviewSubscription } from "../../utils/sanity";

const query = groq`*[_type == "blogpost" && slug.current == $slug][0]`;

function BlogPost({ blogData, preview }) {
  const router = useRouter();
  if (!router.isFallback && !blogData?.slug) {
    return <Error statusCode={404} />;
  }

  const { data: blog = {} } = usePreviewSubscription(query, {
    params: { slug: blogData?.slug?.current },
    initialData: blogData,
    enabled: preview || router.query.preview !== null,
  });

  const {
    _id,
    title,
  } = blog;
  return (
    <>
      <div className="container mx-auto px-6">
        <h2>{title.en}</h2>
      </div>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const blogData = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  return {
    props: { preview, blogData },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "blogpost" && defined(slug.current)][].slug.current`
  );

  console.log(paths)

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default BlogPost;
