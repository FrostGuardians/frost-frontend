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
  where,
} from "firebase/firestore";
import { firebase } from "@/lib/firebase";
import { Ingredient, Recipe } from "@/lib/interfaces";
import ListItem from "@/components/Item";
import { typeToFoodCategory } from "@/lib/utils";
import Image from "next/image";
import NavPlaceholder from "@/components/NavPlaceholder";
import Link from "next/link";
import Icon from "@/components/Icon";

export default async function Page({ params }: { params: { id: string } }) {
  const recipeQuery = doc(
    firebase,
    "fridges/Vely0XkPLzum8Hb5KlTL/recipes",
    params.id
  );
  const recipeSnapshot = await getDoc(recipeQuery);
  const recipeData = recipeSnapshot.data() as Recipe;

  return (
    <main className="flex flex-col p-2 gap-y-2">
      <div className="relative">
        <Link
          href="/recipes"
          className="flex flex-row justify-left items-center gap-2 absolute top-0 z-50 btn btn-circle btn-ghost"
        >
          <Icon name="ArrowLeftIcon" />
        </Link>
        <Image
          src={recipeData.image}
          alt="Your recipe"
          width={500}
          height={500}
          className="rounded-md shadow-md opacity-80"
        />
        <h1 className="text-5xl font-bold absolute bottom-1/4 translate-y-1/2 left-2">
          {recipeData.name}
        </h1>
      </div>

      {recipeData.desc != "" ?? <p>{recipeData.desc}</p>}
      <h2 className="text-lg font-bold">Ingredients</h2>
      <ul className="flex flex-col gap-y-2">
        {recipeData.ingredients.map((ingredient: Ingredient) => {
          return (
            <ListItem
              icon={typeToFoodCategory(ingredient.name)}
              mainContent={ingredient.name}
            />
          );
        })}
      </ul>
      <h2 className="text-lg font-bold">Instructions</h2>
      <p className="pb-28">{recipeData.instructions}</p>
      <NavPlaceholder />
    </main>
  );
}
