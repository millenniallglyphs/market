import "../styles/index.css";
import Layout from "../components/Layout";

import LanguageSelect from "../lib/language";
import { useState } from 'react';


function MyApp({ Component, pageProps }) {

  const [lang, setLang] = useState("en");

  function handleLanguageChange(e){
    setLang(e.target.value);
  };

  return (
    <LanguageSelect.Provider value={lang}>
      <Layout
        select={handleLanguageChange}
        setLang={lang}
        options={[
          { value: 'en', label: 'English' },
          { value: 'sp', label: 'Spanish' },
          { value: 'kl', label: 'Klallam' },
        ]}
      >
        <Component {...pageProps} />
      </Layout>
    </LanguageSelect.Provider>
  );
}

export default MyApp;
