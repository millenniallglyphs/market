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

    console.log(title.en)

    return(
        <>
            <h3 className="text-gray-700 text-2xl font-medium">{title.en}</h3>
            <h1 className="text-gray-700 text-2xl font-medium">{description.en}</h1>
        </>
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