type Props = {
    children: React.ReactNode
}

export default function AuthBackground({children}: Props) {
    return(
        <main className="min-h-screen bg-gradient-to-r from-black via-purple-950 to-gray-900">
           {children}
        </main>
    )
}