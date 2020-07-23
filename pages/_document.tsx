import NextDocument, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-171626134-1"
          />
          <script async src="js/gtag.js" />
          <script async src="js/analitic.js" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Marck+Script&family=Numans&display=swap"
            rel="stylesheet"
            key="Marck-Hammersmith-Numans"
          />
          <meta
            name="description"
            content="Desenvolvedor Fullstack, entusiasta da tecnologia e amante do mundo open-source."
          />
          <meta name="robots" content="index, follow" />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PXZ9TTQ"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
          <script src="js/orb.js" />
        </body>
      </html>
    )
  }
}
