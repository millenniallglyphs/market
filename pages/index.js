import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import ProductsPage from "../components/ProductsPage";
import VendorList from "../components/VendorList";

const query = `//groq
  *[_type == "vendor" && defined(slug.current)]
`;

function IndexPage(props) {
  const { vendorsData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !vendorsData) {
    return <Error statusCode={404} />;
  }

  const { data: vendors } = usePreviewSubscription(query, {
    initialData: vendorsData,
    enabled: preview || router.query.preview !== null,
  });

  //console.log(vendors)

  return (
    <div className="my-8">
      <div className="mt-4">
        <VendorList vendors={vendors}  />
      </div>
    </div>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const vendorsData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      vendorsData,
    },
  };
}

export default IndexPage;
