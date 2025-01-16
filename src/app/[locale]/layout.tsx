import { Manrope } from 'next/font/google';
import '../globals.css';
import { getMessages } from 'next-intl/server';
import classNames from 'classnames';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-manrope',
});

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    keywords: t('keywords'),
    description: t('description'),
    // TODO
    // metadataBase: new URL('https://lazur.ai'),
    alternates: {
      canonical: '/',
      languages: {
        es: '/es',
        en: '/en',
      },
    },
    // TODO
    // openGraph: {
    //   images: '/og-image.jpg',
    // },
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body lang={locale} className={classNames(manrope.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
