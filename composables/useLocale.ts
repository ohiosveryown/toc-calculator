import type { Locale } from './translations'
import { translations } from './translations'

export function useLocale() {
  const locale = useState<Locale>('locale', () => 'en')

  function toggle() {
    locale.value = locale.value === 'en' ? 'es' : 'en'
  }

  function t(key: string): string {
    return translations[locale.value][key] ?? key
  }

  return { locale, toggle, t }
}
