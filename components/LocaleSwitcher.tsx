import { useLocale, useTranslations } from "next-intl";
import LocalSwitcherSelect from "./LocaleSwitcherSelect";

export const locales = ["fr", "en", "de"] as const;

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return(
    <LocalSwitcherSelect value={locale} label={t("label")}>
      {locales.map((cur) => (
        <option value={cur} key={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocalSwitcherSelect>
  )
}
