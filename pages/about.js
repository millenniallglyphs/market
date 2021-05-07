import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { useContext } from 'react';
import LanguageSelect from '../lib/language'

const query = `//groq
  *[_id == "about" ]
`;

const faqquery = `//groq
*[_type == "faq"]`

function aboutPage(props) {
    const lang = useContext(LanguageSelect)
    const { aboutData, faqData, preview } = props;
    const router = useRouter();
    const { data: about } = usePreviewSubscription(query, {
        initialData: aboutData,
        enabled: preview || router.query.preview !== null,
      });
    const { data: faqs } = usePreviewSubscription(faqquery, {
      initialData: faqData,
      enabled: preview || router.query.preview !== null,
    })
    const { title, description, content } = about[0];

     console.log(faqs)

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
    const faqData = await getClient(preview).fetch(faqquery);
  
    return {
      props: {
        preview,
        aboutData,
        faqData
      },
    };
  }

export default aboutPage;