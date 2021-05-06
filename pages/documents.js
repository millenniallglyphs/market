import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { useContext } from 'react';
import LanguageSelect from '../lib/language'

const query = `//groq
  *[_id == "marketDocPage" ]
`;
function Documents(props) {
    const lang = useContext(LanguageSelect)
    const { documentData, preview } = props;
    const router = useRouter();
    const { data: document } = usePreviewSubscription(query, {
        initialData: documentData,
        enabled: preview || router.query.preview !== null,
      });
    const { title, description } = document[0];



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
    const documentData = await getClient(preview).fetch(query);
  
    return {
      props: {
        preview,
        documentData,
      },
    };
  }

export default Documents;