
import Hashids from "hashids";

const hashids = new Hashids(
    process.env.NEXT_PUBLIC_HASHIDS_SALT,
    8
);

export function encryptId(id) {
    return hashids.encode(Number(id));
}

export function decryptId(value) {
    return hashids.decode(value)[0] ?? null;
}