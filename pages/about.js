import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";

const query = `//groq
  *[_type == "about" ]
`;

function aboutPage(props) {
    const { aboutData, preview } = props;
    const router = useRouter();
    const { title, description } = aboutData;

    return(
        <>
            <h1>{title}</h1>
            <h1>{description}</h1>
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