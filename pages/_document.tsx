import NextDocument, { Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  static getInitialProps({ renderPage }: any) {
    return renderPage()
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Marck+Script&family=Numans&display=swap"
            rel="stylesheet"
            key="Marck-Hammersmith-Numans"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
