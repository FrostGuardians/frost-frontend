import { PossibleFoodIcons } from "@/components/FoodIcon";

export function typeToFoodCategory(type: string): PossibleFoodIcons {
  const categories: { [id: string]: string[] } = {
    Apple: ["apple", "pear"],
    Avocado: ["avocado"],
    Banana: ["banana"],
    Beverage: ["beverage", "water", "juice", "drink"],
    Bread: ["bread"],
    Brocoli: [
      "brocoli",
      "vegetable",
      "tomato",
      "cucumber",
      "bell pepper",
      "lettuce",
    ],
    Croissant: ["croissant"],
    Cheese: ["cheese"],
    Carrot: ["carrot"],
    Dairy: ["dairy", "milk", "yogurt"],
    Egg: ["eggs"],
    Fish: ["fish"],
    Meat: ["meat", "chicken", "sausages"],
    Pizza: ["pizza"],
    Strawberry: ["strawberry", "fruit", "watermelon", "raspberry", "peach"],
  };

  // Normalize the input type to ensure case-insensitive matching
  const normalizedType = type.toLowerCase();

  // Iterate over the categories to find a match
  for (const category in categories) {
    for (const item of categories[category]) {
      if (
        item == normalizedType ||
        item.includes(normalizedType) ||
        normalizedType.includes(item)
      ) {
        return category as PossibleFoodIcons;
      }
    }
  }

  return "VegiDish";
}
