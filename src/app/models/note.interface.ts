import { Type } from "../models/type.enum";

export interface Note {
    Title: string;
    Details: string;
    IsDeleted: boolean;
    IsFavorite: boolean;
    Type: Type;
}
