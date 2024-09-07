import { PossibleFoodIcons } from "@/components/FoodIcon";

export function typeToFoodCategory(type: string): PossibleFoodIcons {
  const categories: { [id: string]: string[] } = {
    Apple: ["apple", "pear", "fruit"],
    Avocado: ["avocado"],
    Banana: ["banana"],
    Beverage: ["beverage"],
    Bread: ["bread"],
    Brocoli: ["brocoli", "vegetable"],
    Croissant: ["croissant"],
    Cheese: ["cheese"],
    Carrot: ["carrot"],
    Dairy: ["dairy", "milk", "yogurt"],
    Egg: ["eggs"],
    Fish: ["fish"],
    Meat: ["meat", "chicken"],
    Pizza: ["pizza"],
    Strawberry: ["strawberry"],
  };

  // Normalize the input type to ensure case-insensitive matching
  const normalizedType = type.toLowerCase();

  // Iterate over the categories to find a match
  for (const category in categories) {
    if (categories[category].includes(normalizedType)) {
      return category as PossibleFoodIcons;
    }
  }

  return "VegiDish";
}
