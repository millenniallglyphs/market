import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import ProductsPage from "../components/ProductsPage";
import VendorList from "../components/VendorList";

const query = `//groq
  *[_type == "vendor" && defined(slug.current)]
`;

const productQuery = `//groq
  *[_type == "product" && defined(slug.current)]
`;

function IndexPage(props) {
  const { productsData, vendorsData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !vendorsData) {
    return <Error statusCode={404} />;
  }
  const { data: products } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });

  const { data: vendors } = usePreviewSubscription(query, {
    initialData: vendorsData,
    enabled: preview || router.query.preview !== null,
  });

  console.log(vendors)

  return (
    <div className="my-8">
      <div className="mt-4">
        <VendorList vendors={vendors}  />
      </div>
    </div>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(productQuery);
  const vendorsData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      productsData,
      vendorsData,
    },
  };
}

export default IndexPage;
