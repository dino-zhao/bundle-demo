import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "../components/locale-switcher";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import messagesInFrench from "/compiled-lang/en.json";
import { useEffect, useState } from "react";
function loadLocaleData(locale) {
  switch (locale) {
    default:
      return import("/compiled-lang/en.json");
  }
}

export default function IndexPage(props) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const [messages, setMessages] = useState(messagesInFrench);

  useEffect(() => {
    import(`/compiled-lang/${locale}.json`).then((res) => {
      console.log(res);
      setMessages(res);
    });
  }, [locale]);
  return (
    <div>
      <IntlProvider messages={messages} locale={locale}>
        <p>
          <FormattedMessage
            defaultMessage="Today is {ts, date, ::yyyyMMdd}"
            values={{ ts: Date.now() }}
          />
          <br />
        </p>
      </IntlProvider>

      <h1>Index page</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <LocaleSwitcher />

      <Link href="/gsp">
        <a>To getStaticProps page</a>
      </Link>
      <br />

      <Link href="/gsp/first">
        <a>To dynamic getStaticProps page</a>
      </Link>
      <br />

      <Link href="/gssp">
        <a>To getServerSideProps page</a>
      </Link>
      <br />
    </div>
  );
}
