import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// import Backend from 'i18next-http-backend'

import en from '../public/locales/en.json'
import zh_tw from '../public/locales/zh_TW.json'
import thai from '../public/locales/thai.json'

const resources = {
  en: {
    translation: en,
  },
  thai: {
    translation: thai,
  },
  zh: {
    translation: zh_tw,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // 如果當前切換的語言沒有對應的翻譯則使用這個語言
    // 預設語言
    lng: 'en',
    interpolation: {
      // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
      escapeValue: false,
    },
  })

export default i18n
