import Error from "next/error";
import { useRouter } from "next/router";
import { urlFor, getClient, usePreviewSubscription, PortableText } from "../utils/sanity";
import VendorList from "../components/VendorList";
import { useContext } from 'react';
import LanguageSelect from '../lib/language'

const query = `//groq
  *[_id == "vendors"]{
    title,
    description,
    contents[]->
  }
`;

function VendorPage(props) {
  const lang = useContext(LanguageSelect)
  const { vendorsData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !vendorsData) {
    return <Error statusCode={404} />;
  }
  const { data: vendors } = usePreviewSubscription(query, {
    initialData: vendorsData,
    enabled: preview || router.query.preview !== null,
  });

  const { title, description, contents } = vendors[0]

  console.log(contents[0])
  
  const renderVendors = () => {
    return(
      contents.map((content) => (
        <>
          <li>
            <h1>{content.title}</h1>
            <ul class="list-disc">
              { content.contacts.map((contact, key) => (
                <li index={key}><a href={contact.target}>{contact.label}</a></li>
              ))}
            </ul>
            <img src={urlFor(content.logo)
              .auto("format")
              .width(400)
              .fit("crop")
              .quality(80)}
          />
            <ul class="list-disc">
              { content.tags.map((tag, key) => (
                <li index={key}>{tag}</li>
              ))}
            </ul>
            <PortableText blocks={content.description} className="text-gray-600" />
          </li>
        </>
      ))
    )
  }
  

  return (
    <div className="my-8">
      <div className="container mx-auto px-6">
        { title[lang] ? (
          <>
            <h3 className="text-gray-700 text-2xl font-medium">{title[lang]}</h3>
            <p>{description[lang]}</p>
            <ol class="list-decimal">
              {renderVendors()}
            </ol>
          </>
        ) : (
          <p>no translation</p>
        )
        }
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

export default VendorPage;
