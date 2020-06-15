import NextDocument, { Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  static getInitialProps({ renderPage }: any) {
    return renderPage()
  }

  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
