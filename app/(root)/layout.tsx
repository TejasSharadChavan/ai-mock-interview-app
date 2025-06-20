import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import SignOutButton from "@/components/Signout";



const Rootlayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex justify-between">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/logo.svg" alt="navLogo" width={38} height={32} />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>
        <SignOutButton/>
      </nav>
      {children}
    </div>
  );
};

export default Rootlayout;
