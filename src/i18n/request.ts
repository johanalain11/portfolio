import { getRequestConfig } from "next-intl/server";
import * as rootParams from "next/root-params";
import { i18n } from "../../i18n.config";

export default getRequestConfig(async ({ locale: explicitLocale }) => {
  const routeLocale = explicitLocale ?? (await rootParams.locale());
  const locale =
    i18n.locales.find((supportedLocale) => supportedLocale === routeLocale) ??
    i18n.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
