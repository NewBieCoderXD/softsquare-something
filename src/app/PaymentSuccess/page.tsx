import Link from 'next/link'
import { Select , MenuItem, Button, SelectChangeEvent } from "@mui/material";
import Image from 'next/image';
import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react"


        
export default function paymentPage(){
    const [payment, setPayment] = useState<string>('QR CODE')
    const handlePaymentChange = (event: SelectChangeEvent<string>) => {
            setPayment(event.target.value);
        };
    let paymentContent;

    switch (payment) {
        case "เงินสด": 
            paymentContent=<div className='text-slate-400'>กรุณาจ่ายเงินกับเจ้าหน้าที่</div>
            
            break;
        case "QR CODE": paymentContent = ( 
                <> 
                    <Image 
                        alt="" 
                        src = "https://blog.loga.app/wp-content/uploads/2022/04/sample-promptpay-qr-code-blurred.jpg"/>
                    <TextField label="กรุณาแนบสลิป"/> 
                </>
            )
            break;
        default:
            break;
    }
    return(
    <main>
        <h1>จองสำเร็จแล้ว!</h1>
        <div className='text-slate-400'>กรุณาเลือกวิธีการชำระเงิน</div>
        <Select variant="standard" value={payment} onChange={handlePaymentChange} className='text-slate-400'>
                <MenuItem value="เงินสด" >เงินสด</MenuItem>
                <MenuItem value="QR CODE">QR CODE</MenuItem>
        </Select>
        {paymentContent}
        <Button variant="contained" color="success">
        Submit
        </Button>
    </main>
    )
}