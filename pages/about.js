import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";

const query = `//groq
  *[_id == "about" ]
`;

function aboutPage(props) {
    const { aboutData, preview } = props;
    const router = useRouter();
    const { data: about } = usePreviewSubscription(query, {
        initialData: aboutData,
        enabled: preview || router.query.preview !== null,
      });
    const { title, description } = about[0];

    return(
        <div className="container mx-auto px-6">
            <h3 className="text-gray-700 text-2xl font-medium">{title.en}</h3>
            <p>{description.en}</p>
        </div>
    )
}

export async function getStaticProps({ params = {}, preview = false }) {
    const aboutData = await getClient(preview).fetch(query);
  
    return {
      props: {
        preview,
        aboutData,
      },
    };
  }

export default aboutPage;