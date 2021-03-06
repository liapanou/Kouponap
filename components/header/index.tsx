import Link from "next/link";
import { useState } from "react";

import { Input } from "../input";

export function Header() {
  return (
    <div className="navbar sticky top-0 shadow z-50 bg-base-100 ">
      <div className="flex-1">
        <Link href={"/"}>
          <a className="btn btn-ghost normal-case text-xl">KouponApp</a>
        </Link>
      </div>
      <div className="flex flex-1  items-center justify-center"></div>

      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/profile">
                <a className="justify-between">Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/products/new">
                <a className="justify-between">Add product</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a className="justify-between">Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
