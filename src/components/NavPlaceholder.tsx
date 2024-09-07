"use client";

import Link from "next/link";
import Icon from "./Icon";

export default function NavPlaceholder() {
  return (
    <>
      {/* Placeholder nav, so the nav doesn't cover any content */}
      <nav className="flex bg-blue justify-center bottom-0 w-full p-4 bg-base-200 shadow-2xl invisible">
        <ul className="flex flex-row max-w-xl justify-around w-full">
          <li>
            <Link href="home">
              <Icon name="HomeIcon" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
