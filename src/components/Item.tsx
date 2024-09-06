import { ReactNode } from "react";
import { PossibleIcons } from "heroicons-lookup";
import FoodIcon, { PossibleFoodIcons } from "./FoodIcon";

interface ListItemProps {
  id?: string;
  icon?: PossibleFoodIcons;
  mainContent: string;
  secondaryContent?: string;
}

export default function ListItem({
  id,
  icon,
  mainContent,
  secondaryContent,
}: ListItemProps) {
  return (
    <div className="shadow rounded-md">
      <div id={id} className="w-full flex-row p-2 rounded">
        <div className="flex flex-row gap-2">
          {icon && (
            <div className="flex justify-center aspect-square w-12 h-12 items-center">
              <FoodIcon name={icon} />
            </div>
          )}

          <div className="flex grow flex-col justify-center overflow-hidden text-ellipsis pl-1">
            <div className="line-clamp-1 text-lg text-base-content">
              {mainContent}
            </div>
            {secondaryContent && (
              <div className="line-clamp-1 text-sm">{secondaryContent}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
