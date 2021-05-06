import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";

const query = `//groq
  *[_id == "marketDocPage" ]
`;
function Documents(props) {
    const { documentData, preview } = props;
    const router = useRouter();
    const { data: document } = usePreviewSubscription(query, {
        initialData: documentData,
        enabled: preview || router.query.preview !== null,
      });
    const { title, description } = document[0];



    return(
        <div className="container mx-auto px-6">
            <h3 className="text-gray-700 text-2xl font-medium">{title.en}</h3>
            <p>{description.en}</p>
        </div>
    )
}

export async function getStaticProps({ params = {}, preview = false }) {
    const documentData = await getClient(preview).fetch(query);
  
    return {
      props: {
        preview,
        documentData,
      },
    };
  }

export default Documents;