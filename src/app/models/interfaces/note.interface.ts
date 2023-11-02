import { Tag } from "../enums/tag.enum";

export interface Note {
    title: string;
    details: string;
    isDeleted: boolean;
    isFavorite: boolean;
    tag: string;
}
