import { Wing } from "./eventModel";
import { Timestamp } from "firebase/firestore";

export interface LevelUpRequest {
    id?: string;
    userId: string;
    wing: Wing;
    proofOfWork: string;
    status: 'pending' | 'approved' | 'rejected';
    createdAt: Timestamp;
}
