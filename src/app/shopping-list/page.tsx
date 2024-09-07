"use client";

import Icon from "@/components/Icon";
import ListItem from "@/components/Item";
import NavPlaceholder from "@/components/NavPlaceholder";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { firebase } from "@/lib/firebase";
import { ShoppingList } from "@/lib/interfaces";
import { typeToFoodCategory } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ShoppingListPage() {
  const [newItem, setNewItem] = useState<string>("");
  const [shoppingListId, setShoppingListId] = useState<string | undefined>(
    undefined
  );
  const [shoppingList, setShoppingList] = useState<ShoppingList | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      const shoppingListQuery = query(
        collection(firebase, "fridges/Vely0XkPLzum8Hb5KlTL/shopping-lists"),
        limit(1)
      );
      const shoppingListSnapshot = await getDocs(shoppingListQuery);
      const shoppingListData =
        shoppingListSnapshot.docs[0].data() as ShoppingList;
      setShoppingListId(shoppingListSnapshot.docs[0].id);
      setShoppingList(shoppingListData);
    };

    fetchData();
  }, []);

  async function addItem(name: string) {
    await setDoc(
      doc(
        firebase,
        "fridges/Vely0XkPLzum8Hb5KlTL/shopping-lists/" + shoppingListId
      ),
      {
        items: shoppingList?.items.concat([name]) || [],
      }
    ).then(() => {
      setShoppingList({
        items: shoppingList?.items.concat([name]) || [],
      });
      setNewItem("");
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
        "fridges/Vely0XkPLzum8Hb5KlTL/shopping-lists/" + shoppingListId
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

  return (
    <main className="flex flex-col p-2 gap-y-2">
      <div className="shadow rounded-md">
        <div className="w-full flex-row p-2 rounded">
          <div className="flex flex-row gap-2">
            <div className="flex grow flex-col justify-center overflow-hidden text-ellipsis">
              <div className="line-clamp-1 text-lg text-base-content">
                <input
                  value={newItem}
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
              onClick={async () => await addItem(newItem)}
              className="flex justify-center aspect-square w-12 h-12 items-center btn btn-ghost text-primary p-1"
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
                <button onClick={async () => await removeItem(index)} className="text-red-600 btn btn-ghost">
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
  );
}
