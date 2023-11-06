import { Tag } from "../interfaces/tag.interface";

export interface Note {
    title: string;
    details: string;
    isDeleted: boolean;
    isFavorite: boolean;
    tag: Tag;
}
