import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'], variable: "--main" })

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
            <body className={inter.variable}>
                <div className='root'>
                    {children}
                </div>
            </body>
        </html>
    )
}
