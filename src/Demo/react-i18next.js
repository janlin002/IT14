import React from 'react'

import { useTranslation, Translation } from 'react-i18next'

function Reacti18next() {
  const { t, i18n } = useTranslation()

  return (
    <div>
      <button onClick={() => i18n.changeLanguage('en')} type="button">
        英文
      </button>
      <button onClick={() => i18n.changeLanguage('zh')} type="button">
        中文
      </button>
      <button onClick={() => i18n.changeLanguage('thai')} type="button">
        泰文
      </button>
      <Translation>
        {
            () => <p>{t('hello')}</p>
        }
      </Translation>
      <p>{`${t('hello')} ${t('link')}`}</p>
    </div>
  )
}

export default Reacti18next
