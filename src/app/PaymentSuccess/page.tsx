'use client'
import Link from 'next/link'
import { Select , MenuItem, Button, SelectChangeEvent } from "@mui/material";
import Image from 'next/image';
import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react"
import { useRouter } from 'next/navigation';
        
export default function paymentPage(){
    const [payment, setPayment] = useState<string>('QR CODE')
    const handlePaymentChange = (event: SelectChangeEvent<string>) => {
            setPayment(event.target.value);
        };
    let paymentContent;

    switch (payment) {
        case "เงินสด": 
            paymentContent=<div className='text-slate-500 text-xl font-semibold font-serif flex justify-center my-2'>กรุณาจ่ายเงินกับเจ้าหน้าที่</div>
            
            break;
        case "QR CODE": paymentContent = ( 
                <div className='w-full h-[70%] flex flex-col items-center justify-center my-5'> 
                    <Image 
                        alt="" 
                        src = "/img/qr.png"
                        width = {200}
                        height={200}/>
                    <TextField label="กรุณาแนบสลิป" className='w-full'/> 
                </div>
            )
            break;
        default:
            break;
    }
    return(
    <main className=' flex items-center justify-center bg-green-400	h-screen'>
        <div className='flex flex-col font-sans text-center m-10 p-10 bg-white border-solid border-black border-1 rounded-lg w-2/4 h-50vh content-center justify-center shadow-lg '>
            <div className='text-black text-4xl font-bold font-serif flex justify-center my-2'>จองสำเร็จแล้ว!</div>
            <div className='text-slate-400 text-xl font-semibold font-serif flex justify-center my-2'>กรุณาเลือกวิธีการชำระเงิน</div>
            <Select variant="standard" value={payment} onChange={handlePaymentChange} className='text-slate-500 text-xl font-semibold content-center justify-center'>
                    <MenuItem value="เงินสด" >เงินสด</MenuItem>
                    <MenuItem value="QR CODE">QR CODE</MenuItem>
            </Select>
            {paymentContent}
            <Link href="/">
                <Button variant="contained" color="success" className='my-5 content-center justify-center'>
                Submit
                </Button>
            </Link>
        </div>
    </main>
    )
}