import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import '@/styles/globals.scss'

const roboto = Manrope({
    weight: ['300', '400', '500', '700'],
    subsets: ['cyrillic', 'latin'],
    variable: "--font"
})

export const metadata: Metadata = {
    title: 'Test task',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="ru">
            <body className={roboto.variable}>
                <div className='root'>
                    {children}
                </div>
            </body>
        </html>
    )
}
