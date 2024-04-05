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
      return UserType.khajohn
    }
    return UserType.prajoom;
  }
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="w-full flex flex-row justify-evenly">
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
        <p className="text-2xl text-black">Main</p>
        <p className="text-[green]">Sign Out</p>
      </div>
      <div className="sm:w-full md:w-[80%]">
      {
        // userType==UserType.prajoom ? 
        // <div className="w-full flex flex-col justify-center items-center bg-white border-solid border-grey rounded-2xl">
        //   <p className="text-red">คุณยังไม่ได้ชำระเงิน!</p>
        //   <Link href="/payment">
        //     <button className="rounded-2xl bg-[green] ">ชำระเงิน</button>
        //   </Link>
        // </div>
        // :
        <div className="w-full flex flex-col gap-2">
          <SearchDate/>
          <BookingItem image="/img/shop1.jpg" title="A19"/>
          <BookingItem image="/img/shop2.jpg" title="A20"/>
        </div>
      }
      </div>
    </main>
  );
}
