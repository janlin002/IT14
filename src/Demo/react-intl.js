/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { IntlProvider, FormattedMessage } from 'react-intl'

import zh from '../i18n/zh'
import en from '../i18n/en'
import ja from '../i18n/ja'

function ReactIntl() {
  const [locale, setLocale] = useState(navigator.language)

  let messages

  if (locale.includes('zh')) {
    messages = zh
  } else if (locale.includes('ja')) {
    messages = ja
  } else {
    messages = en
  }
  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={messages}
      defaultFormats="zh-TW"
    >
      <Content
        setLocale={setLocale}
      />
    </IntlProvider>
  )
}

function Content({ setLocale }) {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button
            type="button"
            onClick={() => setLocale('en')}
          >英文
          </button>
          <button
            type="button"
            onClick={() => setLocale('zh')}
          >中文
          </button>
          <button
            type="button"
            onClick={() => setLocale('ja')}
          >日文
          </button>
        </div>
        <FormattedMessage id="app.learn" values={{ name: 'React' }} />
      </header>
    </div>
  )
}

export default ReactIntl
