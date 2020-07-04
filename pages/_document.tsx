import NextDocument, { Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  static getInitialProps({ renderPage }: any) {
    return renderPage()
  }

  render() {
    return (
      <html lang="pt-BR">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Marck+Script&family=Numans&display=swap"
            rel="stylesheet"
            key="Marck-Hammersmith-Numans"
          />
          <meta
            name="description"
            content=" Desenvolvedor Fullstack, entusiasta da tecnologia e amante do mundo
            open-source."
          />
          <meta name="robots" content="index, follow" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="js/orb.js"></script>
        </body>
      </html>
    )
  }
}
