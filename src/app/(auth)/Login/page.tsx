"use client"

import TextField from "@mui/material/TextField"
import Link from "next/link" ;
import { useRouter } from "next/navigation";
export default function LoginPage () {
    const router = useRouter() ;
    function click () {
        router.push('/') ;
        router.refresh() ;
    }
  return (
    <div className = "mt-20 flex-col flex justify-center items-center">
        <header className = "text-black text-xl font-bold justify-center flex">
            Log In
        </header>
        <div className = "mt-20 w-[350px] h-auto border-solid border-black border-100 gap-4 flex flex-col items-center">
            <TextField className = "w-full" label = "โทรศัพท์"></TextField>
            <TextField className = "w-full" label = "รหัสผ่าน"></TextField>
            <Link className = "text-slate-400 self-end flex hover:text-black" href = "">ลืมรหัสผ่าน</Link>
        </div>
        <div className = "mt-28 flex-col">
            <button className = "h-auto w-[300px] bg-green-500 p-2 rounded-2xl text-white hover:bg-green-200 hover:text-black duration-200"
            onClick = {click}
                >เข้าสู่ระบบ
            </button>
            <div className = "mt-4 flex-row flex justify-between">
                <h1 className = "text-green-500">No account?</h1>
                <Link className = "text-green-500 hover:text-black" href = "/signup">Sign up</Link>
            </div>
        </div>
    </div>

  )
}