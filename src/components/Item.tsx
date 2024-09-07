import { ReactNode } from "react";
import { PossibleIcons } from "heroicons-lookup";
import FoodIcon, { PossibleFoodIcons } from "./FoodIcon";

interface ListItemProps {
  id?: string;
  icon?: PossibleFoodIcons;
  mainContent: string;
  secondaryContent?: string;
  children?: ReactNode | undefined;
}

export default function ListItem({
  id,
  icon,
  mainContent,
  secondaryContent,
  children,
}: ListItemProps) {
  return (
    <li className="shadow rounded-md list-none">
      <div id={id} className="w-full flex-row p-2 rounded">
        <div className="flex flex-row gap-2">
          {icon && (
            <div className="flex justify-center aspect-square w-12 h-12 items-center">
              <FoodIcon name={icon} />
            </div>
          )}

          <div className="flex grow flex-col justify-center overflow-hidden text-ellipsis pl-1">
            <div className="line-clamp-1 text-lg text-base-content capitalize">
              {mainContent}
            </div>
            {secondaryContent && (
              <div className="line-clamp-1 text-sm capitalize">
                {secondaryContent}
              </div>
            )}
          </div>

          <div className="flex justify-center aspect-square w-12 h-12 items-center">
            {children}
          </div>
        </div>
      </div>
    </li>
  );
}
