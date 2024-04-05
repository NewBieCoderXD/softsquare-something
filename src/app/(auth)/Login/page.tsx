import TextField from "@mui/material/TextField"
import Link from "next/link" ;
export default function LoginPage () {
  return (
    <div className = "mt-20 flex-col flex justify-center items-center">
        <header className = "text-black text-xl font-bold justify-center flex">
            Log In
        </header>
        <div className = "mt-28 w-44 h-auto border-solid border-black border-100 gap-4 flex flex-col items-center">
            <TextField label = "โทรศัพท์"></TextField>
            <TextField label = "รหัสผ่าน"></TextField>
        </div>
        <div>
            <Link className = "text-slate-200" href = "">ลืมรหัสผ่าน</Link>
        </div>
        <div>
            <button className = "bg-green-500"></button>
            <div>
                <h1 className = "text-green-500">No account?</h1>
                <Link className = "text-green-500" href = "/app/Signup">Sign up</Link>
            </div>
        </div>
    </div>

  )
}