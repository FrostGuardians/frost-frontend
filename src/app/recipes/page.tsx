import ListItem from "@/components/Item";
import NavPlaceholder from "@/components/NavPlaceholder";
import {
  collection,
  getDocs,
  getDoc,
  orderBy,
  query,
  limit,
  doc,
} from "firebase/firestore";
import { firebase } from "@/lib/firebase";
import Link from "next/link";
import { Recipe } from "@/lib/interfaces";

export const dynamic = "force-dynamic";

export default async function Recipes() {
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

  const recipeSnapshot = await getDoc(
    doc(
      firebase,
      "fridges/" +
        process.env.NEXT_PUBLIC_FRIDGE_ID +
        "/recipes/" +
        inventorySnapshot.docs[0].id
    )
  );
  const recipeData = recipeSnapshot.data() as Recipe;

  return (
    <main className="flex flex-col p-2 gap-y-2">
      <ul className="flex flex-col gap-y-2">
        <Link href={"/recipes/" + inventorySnapshot.docs[0].id}>
          <ListItem
            icon="VegiDish"
            mainContent={recipeData.name}
            secondaryContent={
              recipeData.ingredients
                .filter((ingredient) => ingredient.available == true)
                .length.toString() +
              "/" +
              recipeData.ingredients.length.toString() +
              " ingredients availible"
            }
          />
        </Link>
      </ul>
      <NavPlaceholder />
    </main>
  );
}
