import clsx from "clsx";
import { useState } from "react";

export function PriceFilter() {
  const [open, setOpen] = useState(true);
  return (
    <div className=" xs:fixed xs:top-16 xs:z-50 xs:bg-base-300 xs: w-full ">
      <button
        onClick={(x) => setOpen(!open)}
        className=" btn rounded-none  md:hidden  w-full "
      >
        Filter
      </button>
      <div
        className={clsx("p-4", {
          hidden: !open,
        })}
      >
        <form className="">
          <div className=" grid gap-4">
            <div>
              <label>Search</label>
              <input
                type="text"
                placeholder="🔍Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            {/* 1 */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Price €</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
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
                <option>100</option>
                <option>200</option>
                <option>500</option>
                <option>800</option>
                <option>1000</option>
              </select>
            </div>
          </div>

          <div className="divider" />
          {/* 3 */}
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
                  <span className="text-sm ml-2">Crepes</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Pizza</span>
                </label>
              </div>
              <div className="form-control border w-fit">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="text-sm ml-2">Souvlakia</span>
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
