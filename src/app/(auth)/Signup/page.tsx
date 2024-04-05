import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import { MenuItem } from "@mui/material"
import Link from "next/link"
export default function(){
    return (
        <main>
            <div>
                <TextField label = "ชื่อ"></TextField>
                <TextField label = "โทรศัพท์"></TextField>
                <TextField></TextField>
                <TextField label = "รหัสผ่าน"></TextField>
                <Select label = "ประเภทสินค้า">
                    <MenuItem>Salad</MenuItem>
                    <MenuItem>Toilet Paper</MenuItem>
                    <MenuItem>Frozen Pizza</MenuItem>
                </Select>
                <Select label = "สันจร">
                    <MenuItem>ขาจร</MenuItem>
                    <MenuItem>ขาประจำ</MenuItem>
                </Select>
            </div>
            <div>
                <button className = "bg-green-500">ลงทะเบียน</button>
                <Link href = "">Forgot your password?</Link>
            </div>
        </main>
    )
}