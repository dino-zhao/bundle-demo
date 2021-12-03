import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "../components/locale-switcher";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};
export default function IndexPage(props) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  return (
    <div>
      <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
        <p>
          <FormattedMessage
            id="myMessage"
            defaultMessage="Today is {ts, date, ::yyyyMMdd}"
            values={{ ts: Date.now() }}
          />
          <br />
          <FormattedNumber value={19} style="currency" currency="EUR" />
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
