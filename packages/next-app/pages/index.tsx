import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "../components/locale-switcher";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import messagesInFrench from "/lang/en.json";
import { useEffect, useState } from "react";

export default function IndexPage(props) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const [messages, setMessages] = useState(messagesInFrench);

  useEffect(() => {
    import(`/lang/${locale}.json`).then((res) => {
      console.log(res);
      setMessages(res);
    });
  }, [locale]);
  return (
    <div>
      <IntlProvider messages={messages} locale={locale}>
        <p>
          <FormattedMessage id="wwwww" />
          <FormattedMessage id="click_count" values={{ count: 2 }} />
          <br />
        </p>
      </IntlProvider>

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
