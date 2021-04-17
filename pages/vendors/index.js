import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import ProductsPage from "../../components/ProductsPage";

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`;

function VendorPageContainer({ vendorData, preview }) {
  const router = useRouter();
  if (!router.isFallback && !vendorData) {
    return <Error statusCode={404} />;
  }
  const { data: vendors } = usePreviewSubscription(query, {
    initialData: vendorData,
    enabled: preview || router.query.preview !== null,
  });

  return <ProductsPage products={vendors} />;
}

export async function getStaticProps({ params = {}, preview = false }) {
  const vendorData = await getClient(preview).fetch(query);

  return {
    props: { preview, vendorData },
  };
}

export default VendorPageContainer;
