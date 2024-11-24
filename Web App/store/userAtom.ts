import { UserRole, Wing } from "@/utils/enums";
import { atom } from "recoil";

export const userAtom = atom({
    key: 'userAtom',
    default: {
        isAuthenticated: false,
        role: null,
        username: null
    }
})