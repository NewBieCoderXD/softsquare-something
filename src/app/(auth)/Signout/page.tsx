import Link from "next/link"

export default function LogoutPage () {


    return (
        <main>
            <div className="flex justify-center items-center h-screen">
                <Link href="/">
                    <button className="bg-red-500 hover:bg-red-600 hover:rounded-3xl trasition-all ease-in-out duration-200 text-2xl text-white font-semibold py-2 px-4 rounded">
                        Logout
                    </button>
                </Link>
            </div>
        </main>
    );
}