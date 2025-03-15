import { useState, useEffect } from "react"
import {
    onAuthStateChanged as _onAuthStateChanged,
    User,
    createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
    signInWithEmailAndPassword as _signInWithEmailAndPassword,
    signOut as _signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth"

import { firebaseAuth } from "../libs/firebase/config"
import { AuthUser } from "@/types"

const formatAuthUser = (user: User): AuthUser => ({
    uid: user.uid,
    email: user.email,
    name: user.displayName,
})

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState<AuthUser | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const authStateChanged = async (authState: User | null) => {
        if (!authState) {
            setLoading(false)
            return
        }

        setLoading(true)

        const formattedUser = formatAuthUser(authState)

        setAuthUser(formattedUser)

        setLoading(false)
    }

    const clear = () => {
        setAuthUser(null)
        setLoading(true)
    }

    const signInWithEmailAndPassword = async (
        email: string,
        password: string,
    ) => {
        try {
            const result = await _signInWithEmailAndPassword(
                firebaseAuth,
                email,
                password,
            )

            if (!result || !result.user) {
                throw new Error("Failed to signin")
            }
            return result.user.uid
        } catch (error) {
            console.error("Error signing. Email or password incorrect", error)
        }
    }

    const createUserWithEmailAndPassword = async (
        email: string,
        password: string,
    ) => {
        try {
            const result = await _createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password,
            )

            if (!result || !result.user) {
                throw new Error("Failed to create an account")
            }
            return result.user.uid
        } catch (error) {
            console.error("Error creating an account. Try again", error)
        }
    }

    const signInWithGoogle = async () => {
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

    const signOut = () => _signOut(firebaseAuth).then(clear)

    const onAuthStateChanged = (cb: (authState: User | null) => void) => {
        return _onAuthStateChanged(firebaseAuth, cb)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(authStateChanged)
        return () => unSubscribe()
    }, [])

    return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        signOut,
        signInWithGoogle,
    }
}
