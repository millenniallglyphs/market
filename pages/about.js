import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { useContext } from 'react';
import LanguageSelect from '../lib/language'

const query = `//groq
  *[_id == "about" ]{
    title,
    description,
    faqs[]->
  }
`;

function aboutPage(props) {
    const lang = useContext(LanguageSelect)
    const { aboutData, preview } = props;
    const router = useRouter();
    const { data: about } = usePreviewSubscription(query, {
        initialData: aboutData,
        enabled: preview || router.query.preview !== null,
      });
    
    const { title, description, faqs } = about[0];

    console.log(about[0])

    const renderFaq = () => {
      return(
      faqs.map((faq) => (
        <li index={faq.slug}>
          <p>{faq.headline}</p>
          <p>{faq.text}</p>
        </li>
        ))
      )
    }

    return(
        <div className="container mx-auto px-6">
            { title[lang] ? (
              <>
                <h3 className="text-gray-700 text-2xl font-medium">{title[lang]}</h3>
                <p>{description[lang]}</p>
                <ol class="list-decimal">
                  {renderFaq()}
                </ol>
              </>
            ) : (
              <p>no translation</p>
            )
            }
        </div>
    )
}

export async function getStaticProps({ params = {}, preview = false }) {
    const aboutData = await getClient(preview).fetch(query);
  
    return {
      props: {
        preview,
        aboutData
      },
    };
  }

export default aboutPage;