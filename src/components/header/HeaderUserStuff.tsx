import React, { Suspense, lazy } from "react";
import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
const UserImage = lazy(() => import("./UserImage"));
import { cartType, wishlistType } from "../../types/cartTypes";

export default function HeaderUserStuff({ changeIsSearching }) {
  const cartItems = useSelector((state: cartType) => state.product.cart);
  const wishlist = useSelector((state: wishlistType) => state.product.wishlist);

  const userOptions = [
    {
      id: "1",
      title: "search",
      icon: <FiSearch />,
      onClick: changeIsSearching,
      badge: 0,
    },
    {
      id: "2",
      title: "wishlist",
      icon: <FiHeart />,
      badge: wishlist.length,
    },
    {
      id: "3",
      title: "my cart",
      icon: <FiShoppingCart />,
      badge: cartItems.length,
    },
  ];

  return (
    <main className="text-2xl flex justify-around w-[15%]">
      {userOptions.map((userOption) => (
        <abbr
          key={userOption.id}
          title={userOption.title}
          className="border rounded-full cursor-pointer hover:bg-primaryColor duration-700 grid place-items-center size-[2.5rem] p-1 relative"
          onClick={userOption.onClick}
        >
          {userOption.icon}
          {userOption.badge != 0 && (
            <div className="absolute top-[-1rem] bg-red-600 rounded-full size-[1.7rem] text-center right-0 flex justify-center items-center border border-bgColor text-[1rem]">
              <span className="font-extrabold">{userOption.badge}</span>
            </div>
          )}
        </abbr>
      ))}
      <Suspense>
        <UserImage />
      </Suspense>
    </main>
  );
}
