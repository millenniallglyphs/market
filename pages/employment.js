import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { useContext } from 'react';
import LanguageSelect from '../lib/language'

const query = `//groq
  *[_id == "employment" ]
`;
function Employment(props) {
    const lang = useContext(LanguageSelect)
    const { employmentData, preview } = props;
    const router = useRouter();
    const { data: employment } = usePreviewSubscription(query, {
        initialData: employmentData,
        enabled: preview || router.query.preview !== null,
      });
    const { title, description } = employment[0].info;


    return(
        <div className="container mx-auto px-6">
            { title[lang] ? (
            <>
                <h3 className="text-gray-700 text-2xl font-medium">{title.en}</h3>
                <p>testing</p>
            </>
            ) : (
                <p>no translation</p>
            )
            }
        </div>
    )
}

export async function getStaticProps({ params = {}, preview = false }) {
    const employmentData = await getClient(preview).fetch(query);
  
    return {
      props: {
        preview,
        employmentData,
      },
    };
  }

export default Employment;