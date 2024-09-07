import ListItem from "@/components/Item";
import NavPlaceholder from "@/components/NavPlaceholder";
import {
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import { firebase } from "@/lib/firebase";
import Link from "next/link";
import { Recipe } from "@/lib/interfaces";

export default async function Recipes() {
  const recipesQuery = query(
    collection(firebase, "fridges/Vely0XkPLzum8Hb5KlTL/recipes")
  );
  const recipesSnapshot = await getDocs(recipesQuery);

  return (
    <main className="flex flex-col p-2 gap-y-2">
      <ul className="flex flex-col gap-y-2">
        {recipesSnapshot.docs.map((doc) => {
          const recipeData = doc.data() as Recipe;
          return (
            <Link key={doc.id} href={"/recipes/" + doc.id}>
              <ListItem
                icon="VegiDish"
                mainContent={recipeData.name}
                secondaryContent={
                  ((recipeData.desc || "").length > 0 ? recipeData.desc + " | " : "") +
                  recipeData.ingredients
                    .filter((ingredient) => ingredient.available == true)
                    .length.toString() +
                  "/" +
                  recipeData.ingredients.length.toString() +
                  " ingredients availible"
                }
              />
            </Link>
          );
        })}
        {/* <ListItem
          icon="VegiDish"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="MeatDish"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        /> */}
      </ul>
      <NavPlaceholder />
    </main>
  );
}
