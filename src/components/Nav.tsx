"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  Home,
  Info,
  LogIn,
  LogOut,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { ThemeToggle } from "./ThemeToggle";

export default function Nav() {
  const { data: session } = useSession();
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setCollapsed(!collapsed);

  return (
    <Card
      className={`h-screen sticky top-0 transition-all duration-300 overflow-hidden ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <CardContent className="p-4 flex flex-col justify-between h-full">
        <div className="flex flex-col space-y-2">
          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/info" className="w-full flex items-center">
              <Info className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Info</span>}
            </Link>
          </Button>

          <Button variant="ghost" className="justify-start" asChild>
            <Link href="/main" className="w-full flex items-center">
              <Home className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Main</span>}
            </Link>
          </Button>

          {session ? (
            <Button variant="ghost" onClick={() => signOut({ callbackUrl: "/" })} className="justify-start w-full">
              <LogOut className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Sign Out</span>}
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => signIn()} className="justify-start w-full">
              <LogIn className="w-5 h-5" />
              {!collapsed && <span className="ml-3">Sign In</span>}
            </Button>
          )}
        </div>
        <div className="flex flex-col space-y-2">
        {session && (
          <div className="mt-4">
            <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="justify-start w-full">
                  <User className="w-5 h-5" />
                  {!collapsed && <span className="ml-3">{session.user?.name}</span>}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <span className="mr-2">Tema:</span>
                  <ThemeToggle />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
        <Button variant="ghost" onClick={toggleMenu} className="justify-start w-full">
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          {!collapsed && <span className="ml-3">{collapsed ? "Expand" : "Collapse"} Menu</span>}
        </Button>
        </div>
      </CardContent>
    </Card>
  );
}
