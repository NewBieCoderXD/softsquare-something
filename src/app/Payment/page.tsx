import Link from 'next/link'
import { Select , MenuItem } from "@mui/material";
import Image from 'next/image'
import {TextField} from '@mui/material';

export default function paymentPage(){
    <main>
        <div>กรุญาชำระเงิน</div>
        <div>เลือกวันที่ต้องการชำระเงิน</div>
        <Select variant="standard">
                <MenuItem value="mon">วันจันทร์</MenuItem>
                <MenuItem value="tue">วันอังคร</MenuItem>
                <MenuItem value="wed">วันพุธ</MenuItem>
                <MenuItem value="thu">วันพฤหัสบดี</MenuItem>
                <MenuItem value="fri">วันศุกร์</MenuItem>
                <MenuItem value="sat">วันเสาร์</MenuItem>
                <MenuItem value="sun">วันอาทิตย์</MenuItem>
        </Select>
        <Image alt="" src = "https://blog.loga.app/wp-content/uploads/2022/04/sample-promptpay-qr-code-blurred.jpg"/>
        <TextField label="กรุญาแนบสลิป"/>
        <button>Submit</button>
    </main>
}