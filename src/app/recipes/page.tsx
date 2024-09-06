import ListItem from "@/components/Item";

export default function Recipes() {
  return (
    <main className="flex flex-col p-2 gap-y-2">
      <div className="flex flex-col gap-y-2">
        <ListItem
          icon="VegiDish"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
        <ListItem
          icon="MeatDish"
          mainContent="Apfel"
          secondaryContent="Expires 12.12.2024"
        />
      </div>
    </main>
  );
}
