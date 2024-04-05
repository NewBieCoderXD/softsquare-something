import { LocalizationProvider,DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import {DatePicker} from "@mui/x-date-pickers/DatePicker"; 
export default function SearchDate() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="กรุณาเลือกวันที่จอง"/>
        </LocalizationProvider>
    )
}