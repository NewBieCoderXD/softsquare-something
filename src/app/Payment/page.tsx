"use client"

import Link from 'next/link'
import { Select , MenuItem } from "@mui/material";
import Image from 'next/image'
import {TextField} from '@mui/material';
import { useRouter } from 'next/navigation';
export default function paymentPage(){
    const router = useRouter() ;
    function click () {
        router.push('/paymentSuccess') ;
        router.refresh() ;
    }
    return (
        <main className='flex items-center justify-center bg-green-400 h-screen'>
            <div className = "flex flex-row items-center w-1/3" style={{margin: "20px", display:"flex",flexDirection: "row", alignContent:"space-around",justifyContent: "space-around",flexWrap: "wrap"}}>
                <div className = "h-auto w-full flex flex-col border-solid border-black border-1 m-2 p-4 rounded-lg shadow-lg bg-white shadow-lg bg-white">
                    <div className="text-black text-xl font-semibold font-serif flex justify-center my-2">
                    กรุณาชำระเงิน</div>
                <div>เลือกวันที่ต้องการชำระเงิน</div>
                <Select
                    variant="standard">
                        <MenuItem value="mon">วันจันทร์</MenuItem>
                        <MenuItem value="tue">วันอังคร</MenuItem>
                        <MenuItem value="wed">วันพุธ</MenuItem>
                        <MenuItem value="thu">วันพฤหัสบดี</MenuItem>
                        <MenuItem value="fri">วันศุกร์</MenuItem>
                        <MenuItem value="sat">วันเสาร์</MenuItem>
                        <MenuItem value="sun">วันอาทิตย์</MenuItem>
                </Select>
                <div className='flex flex-col items-center justify-center'>
                    <Image 
                    alt="qr" 
                    src = "/img/qr.png"
                    width = {100}
                    height={100}/>
            <TextField label="กรุณาแนบสลิป"/>
            </div>
            <button className="my-5 block rounded-md bg-blue-500 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" onClick = {click}>Submit</button>
            </div></div>
        </main>
    )
}