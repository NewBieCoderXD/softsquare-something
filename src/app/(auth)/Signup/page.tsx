"use client"
import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import { MenuItem } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function(){
    const router = useRouter() ;
    function click () {
        router.push('/') ;
        router.refresh() ;
    }
    return (
        <main className="flex flex-col justify-center items-center ">
            <div className = "">
                <p className="text-3xl font-bold flex flex-col gap-2 mt-20">Sign Up</p>
                <Link className = "text-3xl absolute mt-20 top-0 right-4 text-green-500 hover:text-black" href = "/login">login</Link>
            </div>
            <div className="mt-20 sm:w-full md:w-[50%] flex flex-col gap-2">
                <TextField label = "ชื่อ"></TextField>
                <TextField label = "โทรศัพท์"></TextField>
                <TextField label = "กรุณาใส่รูปภาพ"></TextField>
                <TextField label = "รหัสผ่าน"></TextField>
                <Select label = "ประเภทสินค้า" placeholder = "ประเภทสินค้า">
                    <MenuItem value = "Salad">Salad</MenuItem>
                    <MenuItem value ="Toilet">Toilet Paper</MenuItem>
                    <MenuItem value = "Frozen Pizza">Frozen Pizza</MenuItem>
                </Select>
                <Select label = "สันจร" placeholder = "สันจร">
                    <MenuItem value = "ขาจร">ขาจร</MenuItem>
                    <MenuItem value = "ขาประจำ">ขาประจำ</MenuItem>
                </Select>
                <div className="mt-20 flex flex-col gap-2 justify-center items-center">
                    <button className = "h-auto w-[300px] bg-green-500 p-2 rounded-2xl text-white hover:bg-green-200 hover:text-black duration-200"
                    onClick = {click}
                    >
                        ลงทะเบียน
                    </button>
                    <Link href = "" className="text-[green]">Forgot your password?</Link>
                </div>
            </div>
        </main>
    )
}