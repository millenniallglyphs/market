import Error from "next/error";
import { useRouter } from "next/router";
import { urlFor, getClient, usePreviewSubscription } from "../utils/sanity";
import { useContext } from 'react';
import LanguageSelect from '../lib/language'

const query = `//groq
  *[_id == "home"]{
    title,
    description,
    heros[]->
  }
`;

function IndexPage(props) {
  const lang = useContext(LanguageSelect)
  const { homeData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !homeData) {
    return <Error statusCode={404} />;
  }

  const { data: home } = usePreviewSubscription(query, {
    initialData: homeData,
    enabled: preview || router.query.preview !== null,
  });

  const { title, description, heros } = home[0]

  console.log(home[0])

  return (
    <div className="my-8">
      <div className="mt-4">
        <img src={urlFor(heros[0].backgroundImage)
              .auto("format")
              .width(1800)
              .fit("crop")
              .quality(80)}
          />
      </div>
    </div>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const homeData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      homeData,
    },
  };
}

export default IndexPage;
