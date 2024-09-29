import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Import Google Fonts or any custom fonts here */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Geist+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-background text-foreground">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
