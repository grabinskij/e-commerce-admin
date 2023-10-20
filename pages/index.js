import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
    const { data: session } = useSession();
    if(!session){
        return (
            <div className='items-center'>
                <div className="text-center w-full">
                    <button onClick={() => signIn('google')} className="bg-emerald-400 p-2 px-4 rounded-md">Login</button>
                </div>
            </div>)
        }
        return (
            <div>Logged in {session.user.email}</div>
        )
}
