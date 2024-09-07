"use client";

import Icon from "@/components/Icon";
import ListItem from "@/components/Item";
import NavPlaceholder from "@/components/NavPlaceholder";
import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firebase } from "@/lib/firebase";
import { Inventory, Item, ShoppingList } from "@/lib/interfaces";
import { typeToFoodCategory } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ShoppingListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const add = searchParams.get("add");

  const [newItem, setNewItem] = useState<string>("");
  const [shoppingListId, setShoppingListId] = useState<string | undefined>(
    undefined
  );
  const [shoppingList, setShoppingList] = useState<ShoppingList | undefined>(
    undefined
  );
  const [inventory, setInventory] = useState<Inventory | undefined>(undefined);

  useEffect(() => {
    const fetchShoppingList = async () => {
      const shoppingListQuery = query(
        collection(
          firebase,
          "fridges/" + process.env.NEXT_PUBLIC_FRIDGE_ID + "/shopping-lists"
        ),
        limit(1)
      );
      const shoppingListSnapshot = await getDocs(shoppingListQuery);
      if (shoppingListSnapshot.empty) {
        throw "No Shopping List";
      }
      const shoppingListData =
        shoppingListSnapshot.docs[0].data() as ShoppingList;
      setShoppingListId(shoppingListSnapshot.docs[0].id);
      setShoppingList(shoppingListData);
    };
    const fetchInventory = async () => {
      const inventoryQuery = query(
        collection(firebase, "fridges/" + process.env.NEXT_PUBLIC_FRIDGE_ID + "/inventory"),
        orderBy("date", "desc"),
        limit(1)
      );
      const inventorySnapshot = await getDocs(inventoryQuery);
      const inventoryData = inventorySnapshot.docs[0].data() as Inventory;
      setInventory(inventoryData);
    };

    fetchShoppingList();
    fetchInventory();
  }, []);

  async function addItem(name: string) {
    if (
      (inventory?.items || [])
        .sort((a: Item, b: Item) => {
          const aExpiration = new Date(
            a.expiration.seconds * 1000 + a.expiration.nanoseconds / 1000000
          );
          const bExpiration = new Date(
            b.expiration.seconds * 1000 + b.expiration.nanoseconds / 1000000
          );
          return aExpiration.getTime() - bExpiration.getTime();
        })
        .map((item) => item.name.toLowerCase())
        .includes(name.toLowerCase()) &&
      !add
    ) {
      return router.push("?add=" + name);
    }

    await setDoc(
      doc(
        firebase,
        "fridges/" + process.env.NEXT_PUBLIC_FRIDGE_ID + "/shopping-lists/" + shoppingListId
      ),
      {
        items: shoppingList?.items.concat([name]) || [],
      }
    ).then(() => {
      setShoppingList({
        items: shoppingList?.items.concat([name]) || [],
      });
      setNewItem("");
      if (add) {
        router.replace("/shopping-list");
      }
    });
  }

  async function removeItem(index: number) {
    // Make a copy of the items before modifying it
    const updatedItems = shoppingList?.items ? [...shoppingList.items] : [];

    // Remove the item at the specified index
    updatedItems.splice(index, 1);

    await setDoc(
      doc(
        firebase,
        "fridges/" + process.env.NEXT_PUBLIC_FRIDGE_ID + "/shopping-lists/" + shoppingListId
      ),
      {
        items: updatedItems,
      }
    ).then(() => {
      setShoppingList({
        items: updatedItems,
      });
      setNewItem("");
    });
  }

  if (shoppingList == undefined || inventory == undefined) {
    return (
      <main className="flex flex-col p-2 gap-y-2 overflow-y-hidden">
        <div className="shadow rounded-md">
          <div className="w-full flex-row p-2 rounded">
            <div className="flex flex-row gap-2">
              <div className="flex grow flex-col justify-center overflow-hidden text-ellipsis">
                <div className="line-clamp-1 text-lg text-base-content">
                  <input
                    value={newItem}
                    onChange={() => {}}
                    type="text"
                    placeholder="Your Item"
                    disabled
                    className="input input-bordered w-full disabled"
                  />
                </div>
              </div>
              <button className="add-button btn-disabled">
                <Icon name="PlusIcon" />
              </button>
            </div>
          </div>
        </div>
        <div className="skeleton w-full h-16" />
        <div className="skeleton w-full h-16" />
        <div className="skeleton w-full h-16" />
        <div className="skeleton w-full h-16" />
        <div className="skeleton w-full h-16" />
        <div className="skeleton w-full h-16" />
        <div className="skeleton w-full h-16" />
        <div className="skeleton w-full h-16" />
      </main>
    );
  }

  return (
    <>
      {add && (
        <dialog className="modal z-50" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              {"You already have '" +
                add +
                "' in your fridge! It expires " +
                (inventory?.items || [])
                  .sort((a: Item, b: Item) => {
                    const aExpiration = new Date(
                      a.expiration.seconds * 1000 +
                        a.expiration.nanoseconds / 1000000
                    );
                    const bExpiration = new Date(
                      b.expiration.seconds * 1000 +
                        b.expiration.nanoseconds / 1000000
                    );
                    return aExpiration.getTime() - bExpiration.getTime();
                  })
                  .find((item: Item) => item.name == add)?.expiration +
                "."}
            </p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-outline"
                onClick={async () => await addItem(add)}
              >
                Add anyway
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setNewItem("");
                  router.replace("/shopping-list");
                }}
              >
                Never mind
              </button>
            </div>
          </div>
        </dialog>
      )}

      <main className="flex flex-col p-2 gap-y-2">
        <div className="shadow rounded-md">
          <div className="w-full flex-row p-2 rounded">
            <div className="flex flex-row gap-2">
              <div className="flex grow flex-col justify-center overflow-hidden text-ellipsis">
                <div className="line-clamp-1 text-lg text-base-content">
                  <input
                    value={newItem || ""}
                    onChange={(event) => setNewItem(event.target.value)}
                    type="text"
                    placeholder="Your Item"
                    className="input input-bordered w-full"
                    onKeyDown={async (e) => {
                      if (e.key === "Enter") {
                        await addItem(newItem);
                      }
                    }}
                  />
                </div>
              </div>
              <button
                disabled={newItem == ""}
                onClick={async () => await addItem(newItem)}
                className="add-button btn-primary"
              >
                <Icon name="PlusIcon" />
              </button>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-y-2">
          {shoppingList &&
            shoppingList.items.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  icon={typeToFoodCategory(item)}
                  mainContent={item}
                >
                  <button
                    onClick={async () => await removeItem(index)}
                    className="text-red-600 btn btn-ghost btn-square"
                  >
                    <Icon name="TrashIcon" />
                  </button>
                </ListItem>
              );
            })}
          {/* <ListItem
          icon="Apple"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Avocado"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Banana"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Beverage"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Bread"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Brocoli"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Carrot"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Cheese"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Croissant"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Egg"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Fish"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Meat"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Pizza"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="Strawberry"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        /> */}
        </ul>
        <NavPlaceholder />
      </main>
    </>
  );
}
