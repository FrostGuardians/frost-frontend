"use client";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  setDoc,
} from "firebase/firestore";
import { firebase } from "@/lib/firebase";
import { Ingredient, Recipe, ShoppingList } from "@/lib/interfaces";
import ListItem from "@/components/Item";
import { typeToFoodCategory } from "@/lib/utils";
import Image from "next/image";
import NavPlaceholder from "@/components/NavPlaceholder";
import Link from "next/link";
import Icon from "@/components/Icon";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);
  const [shoppingListId, setShoppingListId] = useState<string | undefined>(
    undefined
  );
  const [shoppingList, setShoppingList] = useState<ShoppingList | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeQuery = doc(
        firebase,
        "fridges/" + process.env.NEXT_PUBLIC_FRIDGE_ID + "/recipes",
        params.id
      );
      const recipeSnapshot = await getDoc(recipeQuery);
      const recipeData = recipeSnapshot.data() as Recipe;
      setRecipe(recipeData);
    };
    const fetchShoppingList = async () => {
      const shoppingListQuery = query(
        collection(firebase, "fridges/fridge_demo/shopping-lists"),
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

    fetchRecipe();
    fetchShoppingList();
  }, [params.id]);

  async function addItem(name: string) {
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
    });
  }

  if (recipe == undefined) {
    return (
      <main className="flex flex-col p-2 gap-y-2 overflow-y-hidden">
        <div className="skeleton w-full aspect-square" />
        <h2 className="text-lg font-bold">Ingredients</h2>
        <ul className="flex flex-col gap-y-2">
          <div className="skeleton w-full h-16" />
          <div className="skeleton w-full h-16" />
        </ul>
        <h2 className="text-lg font-bold">Instructions</h2>
        <div className="skeleton w-full aspect-square" />
      </main>
    );
  }

  return (
    <main className="flex flex-col p-2 gap-y-2">
      <div className="relative">
        <Link
          href="/recipes"
          className="flex flex-row justify-left items-center gap-2 absolute top-2 left-2 z-50 btn btn-circle btn-ghost"
        >
          <Icon name="ArrowLeftIcon" />
        </Link>
        <Image
          src={recipe.image_url}
          alt="Your recipe"
          width={1000}
          height={1000}
          className="rounded-md shadow-md opacity-80"
        />
        <h1 className="text-5xl font-bold absolute bottom-1/4 translate-y-1/2 left-5">
          {recipe.name}
        </h1>
      </div>

      <h2 className="text-lg font-bold">Ingredients</h2>
      <ul className="flex flex-col gap-y-2">
        {recipe.ingredients.map((ingredient: Ingredient, index) => {
          return (
            <ListItem
              key={index}
              icon={typeToFoodCategory(ingredient.name)}
              mainContent={ingredient.name}
            >
              {!ingredient.available && (
                <button
                  onClick={async () => await addItem(ingredient.name)}
                  className="btn btn-ghost btn-square"
                >
                  <Icon name="ShoppingCartIcon" />
                </button>
              )}
            </ListItem>
          );
        })}
      </ul>
      <h2 className="text-lg font-bold">Instructions</h2>
      <p className="pb-28">{recipe.instructions}</p>
      <NavPlaceholder />
    </main>
  );
}
