'use client'

import Icon from "@/components/Icon";
import ListItem from "@/components/Item";

export default function ShoppingList() {
  return (
    <main className="flex flex-col p-2 gap-y-2">
      <div className="shadow rounded-md">
        <div className="w-full flex-row p-2 rounded">
          <div className="flex flex-row gap-2">
            <button className="flex justify-center aspect-square w-12 h-12 items-center" onClick={() => console.log("add item")}>
              <Icon name="PlusCircleIcon" />
            </button>

            <div className="flex grow flex-col justify-center overflow-hidden text-ellipsis pl-1">
              <div className="line-clamp-1 text-lg text-base-content">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <ListItem
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
        />
      </div>
    </main>
  );
}
