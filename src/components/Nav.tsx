"use client";

import Link from "next/link";
import Icon from "./Icon";
import { usePathname } from "next/navigation";

export default function Nav() {
  let pathname = usePathname();

  return (
    <>
      {/* Actual nav with the links */}
      <nav className="flex bg-blue justify-center fixed bottom-0 w-full p-4 bg-accent shadow-2xl">
        <ul className="flex flex-row max-w-xl justify-around w-full">
          <li>
            <Link
              href="/home"
              className={
                pathname == "/home" ? "text-primary" : "text-accent-content"
              }
            >
              <Icon name="HomeIcon" />
            </Link>
          </li>
          <li>
            <Link
              href="/recipes"
              className={
                pathname == "/recipes" ? "text-primary" : "text-accent-content"
              }
            >
              <Icon name="DocumentTextIcon" />
            </Link>
          </li>
          <li>
            <Link
              href="/shopping-list"
              className={
                pathname == "/shopping-list"
                  ? "text-primary"
                  : "text-accent-content"
              }
            >
              <Icon name="ShoppingCartIcon" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
