import { Icons } from "./icons";

export const TabNames = {
    ALL_NOTES: "All notes",
    TRASH: "Trash",
    FAVORITE: "Favorite"
}

export const Tabs = [
    {
        name: TabNames.ALL_NOTES,
        icon: Icons.FILE_TEXT,
        isSelected: true
    },
    {
        name: TabNames.TRASH,
        icon: Icons.TRASH,
        isSelected: false
    },
    {
        name: TabNames.FAVORITE,
        icon: Icons.STAR,
        isSelected: false
    }
];