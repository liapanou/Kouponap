import clsx from "clsx";
import { useState } from "react";

export function PriceFilter() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" xs:fixed xs:top-16 xs:z-50 xs:bg-base-300 xs:w-full ">
      <button
        onClick={(x) => setOpen(!open)}
        className="md:hidden btn rounded-none bg-base-300  w-full "
      >
        Filter
      </button>
      <div
        className={clsx("p-4", {
          hidden: open,
        })}
      >
        <form className="">
          <div className=" grid gap-4">
            {/* 1 */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price €</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
            {/* 2 */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price(points)</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
              </select>
            </div>
          </div>

          <div className="divider" />
          {/* 2 */}
          <div>
            <span className="block text-sm font-semibold text-gray-500 mb-2">
              Food & Drinks
            </span>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Beverages</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Coffees</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Paistres</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Snacks</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Remember me</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Remember me</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Remember me</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Remember me</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Remember me</span>
                </label>
              </div>
            </div>
          </div>

          <div className="divider" />
          <button className="btn w-full">Update results</button>
        </form>
      </div>
    </div>
  );
}
