import ListItem from "@/components/Item";
import Image from "next/image";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { firebase } from "@/lib/firebase";
import { typeToFoodCategory } from "@/lib/utils";
import NavPlaceholder from "@/components/NavPlaceholder";
import { FridgeImage, Inventory, Item } from "@/lib/interfaces";

export const dynamic = "force-dynamic";

export default async function Home() {
  const imageQuery = query(
    collection(
      firebase,
      "fridges/" + process.env.NEXT_PUBLIC_FRIDGE_ID + "/images"
    ),
    orderBy("date", "desc"),
    limit(1)
  );
  const imageSnapshot = await getDocs(imageQuery);

  if (imageSnapshot.empty) {
    return (
      <main className="flex flex-col p-2 gap-y-2 overflow-y-hidden">
        <div className="skeleton w-full aspect-square" />
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

  const imageData = imageSnapshot.docs[0].data() as FridgeImage;

  const inventoryQuery = query(
    collection(
      firebase,
      "fridges/" + process.env.NEXT_PUBLIC_FRIDGE_ID + "/inventory"
    ),
    orderBy("date", "desc"),
    limit(1)
  );
  const inventorySnapshot = await getDocs(inventoryQuery);

  if (inventorySnapshot.empty) {
    return (
      <main className="flex flex-col p-2 gap-y-2 overflow-y-hidden">
        <div className="skeleton w-full aspect-square" />
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

  const inventoryData = inventorySnapshot.docs[0].data() as Inventory;

  return (
    <main className="flex flex-col p-2 gap-y-2">
      <div className="relative">
        <Image
          src={imageData.urls[0]}
          alt="Your fridge"
          width={1000}
          height={1000}
          className="rounded-md shadow-md"
          priority
        />
        <p className="absolute left-2 bottom-2 z-50 text-white">
          {(() => {
            const date = new Date(
              imageData.date.seconds * 1000 +
                imageData.date.nanoseconds / 1000000
            );
            date.setHours(date.getHours() + 2); // Add 2 hours
            return date.toLocaleString();
          })()}
        </p>
      </div>

      <ul className="flex flex-col gap-y-2">
        {inventoryData["items"]
          .sort((a: Item, b: Item) => {
            const aExpiration = new Date(
              a.expiration.seconds * 1000 + a.expiration.nanoseconds / 1000000
            );
            const bExpiration = new Date(
              b.expiration.seconds * 1000 + b.expiration.nanoseconds / 1000000
            );
            return aExpiration.getTime() - bExpiration.getTime();
          })
          .map((item: Item, index) => {
            return (
              <ListItem
                key={index}
                icon={typeToFoodCategory(item.name)}
                mainContent={item.name}
                secondaryContent={
                  "Expires " +
                  new Date(
                    item.expiration.seconds * 1000 +
                      item.expiration.nanoseconds / 1000000
                  ).toLocaleDateString()
                }
              />
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
