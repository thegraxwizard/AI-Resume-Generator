import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default async function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-blue-400/20 bg-background/70 backdrop-blur-lg z-50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-sky-500/5 to-cyan-500/5"></div>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-300">
          <Image
            src={"/logo.png"}
            alt="Next Gen AI Logo"
            width={200}
            height={100}
            className="h-140 w-auto object-contain"
          />
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
              >
                <LayoutDashboard className="h-4 w-4 text-sky-500" />
                Industry Insights
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0 hover:bg-blue-500/10 hover:scale-110 transition-all duration-300">
                <LayoutDashboard className="h-4 w-4 text-sky-500" />
              </Button>
            </Link>

            {/* Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-400 hover:to-sky-400 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                  <Zap className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 border border-blue-500/20 bg-background/90 backdrop-blur-lg">
                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2 hover:bg-blue-500/10 focus:bg-blue-500/10 transition-colors hover:translate-x-1 duration-300">
                    <FileText className="h-4 w-4 text-sky-500" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-2 hover:bg-blue-500/10 focus:bg-blue-500/10 transition-colors hover:translate-x-1 duration-300"
                  >
                    <PenBox className="h-4 w-4 text-blue-500" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2 hover:bg-blue-500/10 focus:bg-blue-500/10 transition-colors hover:translate-x-1 duration-300">
                    <GraduationCap className="h-4 w-4 text-sky-500" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button 
                variant="outline" 
                className="border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
