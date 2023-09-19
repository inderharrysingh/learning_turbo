"use client";

import { SessionProvider } from "next-auth/react";
import { Navbar  } from "ui";

type Props = {
  children: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
 
  return <SessionProvider>{children}</SessionProvider>;
};