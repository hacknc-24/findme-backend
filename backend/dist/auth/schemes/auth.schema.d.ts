import { Document } from 'mongoose';
export declare class Auth extends Document {
    username: string;
    password: string;
    firstName: string;
    Rank: string;
    Bio: string;
    ImageURL: string;
}
export declare const AuthSchema: import("mongoose").Schema<Auth, import("mongoose").Model<Auth, any, any, any, Document<unknown, any, Auth> & Auth & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Auth, Document<unknown, {}, import("mongoose").FlatRecord<Auth>> & import("mongoose").FlatRecord<Auth> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
