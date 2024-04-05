"use client"
import BookingItem from "@/component/BookingItem";
import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker"; 
import SearchDate from "@/component/SeachDate"

enum UserType{
  prajoom,
  khajohn
}

export default function Home() {
  let [userType,setUserType] = useState(UserType.prajoom);
  function toggleUserType(){
    if(userType==UserType.prajoom){
      setUserType(UserType.khajohn)
      return;
    }
    setUserType(UserType.prajoom)
  }
  return (
    <main className="bg-white flex min-h-screen flex-col items-center p-2 pt-0 w-full">
      <div className="w-full flex flex-row justify-between relative">
        {
          userType==UserType.prajoom ? 
          <button
            onClick={toggleUserType}
            className="text-[green]"
          >ขาจร</button>
          :
          <button
            onClick={toggleUserType}
            className="text-[green]"
          >ประจำ</button>
        }
        <p className="text-2xl text-black absolute left-1/2 transform -translate-x-1/2 text-center w-fit">Main</p>
        <div className = "flex flex-row gap-3">
          <Link href="/signout">
            <p className="text-[green] hover:text-black">Sign Out</p>
          </Link>
          <Link href="/login">
          <p className="text-[green] hover:text-black">Sign In</p>
        </Link>
        </div>
        
      </div>
      <div className="sm:w-full md:w-[80%] flex flex-col gap-3">
        <div className="w-full flex flex-col justify-center items-center bg-white border-solid border-grey border-2 shadow-lg p-3">
          <p className="text-[red]">คุณยังไม่ได้ชำระเงิน!</p>
          <Link href="/payment">
            <button className="rounded-2xl bg-[green] text-white p-2">ชำระเงิน</button>
          </Link>
        </div>
        <div className="w-full flex flex-col gap-2 border-solid border-2 border-grey shadow-lg p-2">
          <SearchDate></SearchDate>
          <BookingItem image="/img/shop1.png" title="A19"/>
          <BookingItem image="/img/shop2.png" title="A20"/>
        </div>
      </div>
    </main>
  );
}
