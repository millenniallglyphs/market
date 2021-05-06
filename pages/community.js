import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { useContext } from 'react';
import LanguageSelect from '../lib/language'

const query = `//groq
  *[_id == "community" ]
`;
function communityPage(props) {
    const lang = useContext(LanguageSelect)
    const { communityData, preview } = props;
    const router = useRouter();
    const { data: community } = usePreviewSubscription(query, {
        initialData: communityData,
        enabled: preview || router.query.preview !== null,
      });
    const { title, description } = community[0].bylaws;



    return(
        <div className="container mx-auto px-6">
          { title[lang] ? (
            <>
              <h3 className="text-gray-700 text-2xl font-medium">{title[lang]}</h3>
              <p>{description[lang]}</p>
            </>
          ) : (
            <p>no translation</p>
          )
          }
        </div>
    )
}

export async function getStaticProps({ params = {}, preview = false }) {
    const communityData = await getClient(preview).fetch(query);
  
    return {
      props: {
        preview,
        communityData,
      },
    };
  }

export default communityPage;