export default function AuthLayout({children} : {children: React.ReactNode}){
    return (
        <section className="border-4 border-purple-700">
            {children}
        </section>
    )
}