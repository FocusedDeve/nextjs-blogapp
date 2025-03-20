"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "../ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";


export function Navbar() {
    const { getUser} = useKindeBrowserClient();
    const user = getUser();
    return (
        <nav className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
            <h1 className="text-3xl font-semibold">
                Blog<span className="text-blue-500">EkkoC4</span>
            </h1>

            <div>
            <Link href="/">Home</Link>

            </div>
            <div>
                <Link href="/dashboard">Dashboard</Link>
            </div>

        </div>
        {user ?(
            <div className="flex items-center gap-4">
                <p>{user.given_name}</p>
                <LogoutLink className={buttonVariants({ variant: "secondary"})}>Logout</LogoutLink>
            </div>
        ): (
            <div className="hidden sm:flex items-center gap-6">
            <LoginLink className={buttonVariants({ variant: "outline" })}>
                Login
            </LoginLink>
            <RegisterLink className={buttonVariants({ variant: "secondary" })}>
                Sign up
            </RegisterLink>
        </div>
        )}
       
    </nav>
    )
}