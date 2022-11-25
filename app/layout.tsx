
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html>
        <head>
            <title>레이아웃 타이틀</title>
        </head>
        <body>
        <nav>
            Navigator
        </nav>
        {children}
        </body>
        </html>
    )
}
