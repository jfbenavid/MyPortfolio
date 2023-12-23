import { portfolio } from "./portfolio"

export type dataProvider = {
  data?: portfolio,
  locale?: Record<string, string>
  isNotSpanish?: boolean
  toggleLanguage?: () => void
}