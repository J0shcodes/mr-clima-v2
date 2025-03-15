import {
    type User,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged as _onAuthStateChanged,
    signInWithEmailAndPassword as _signInWithEmailAndPassword,
    createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
} from "firebase/auth"

import { firebaseAuth } from "./config"

export function onAuthStateChanged(callback: (authUser: User | null) => void) {
    return _onAuthStateChanged(firebaseAuth, callback)
}

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()

    try {
        const result = await signInWithPopup(firebaseAuth, provider)

        if (!result || !result.user) {
            throw new Error("Google sign in failed")
        }
        return result.user.uid
    } catch (error) {
        console.error("Error signing in with google", error)
    }
}

export const signInWithEmailAndPassword = (email: string, password: string) =>
    _signInWithEmailAndPassword(firebaseAuth, email, password)

export const createUserWithEmailAndPassword = (
    email: string,
    password: string,
) => _createUserWithEmailAndPassword(firebaseAuth, email, password)

export async function signOut() {
    try {
        await firebaseAuth.signOut()
    } catch (error) {
        console.error("Error signing out with google", error)
    }
}
