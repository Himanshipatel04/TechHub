"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Nav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            item="Home"
            setActive={setActive}
            active={active}
          ></MenuItem>
        </Link>
        <MenuItem item="Our courses" setActive={setActive} active={active}>
          <div className="flex flex-col p-1 gap-2 ">
            <HoveredLink href="/allcourses">All Courses</HoveredLink>
            <HoveredLink href="/webdev">Web Development</HoveredLink>
            <HoveredLink href="/ds">Data Science</HoveredLink>
            <HoveredLink href="/ml">Machine Learning</HoveredLink>
            <HoveredLink href="/cy">Cyber Security</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            item="Contact Us"
            setActive={setActive}
            active={active}
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
export default Nav;
