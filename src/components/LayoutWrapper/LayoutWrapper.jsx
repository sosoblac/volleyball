"use client"; // This is a client component
import { usePathname } from "next/navigation"; // Import usePathname hook
import TeamNavbar from "../TeamNavbar/TeamNavbar";
import NavBar from "../NavBar/NavBar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname(); // Get the current path
  const isTeamsRoute = pathname.startsWith("/teams/");
  // console.log(pathname,'this is the pathname')

  return (
    <>
      {isTeamsRoute ? <TeamNavbar /> : <NavBar />}
      {children}
    </>
  );
}