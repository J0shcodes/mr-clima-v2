import { useState, useEffect } from "react"
import {
    onAuthStateChanged as _onAuthStateChanged,
    User,
    createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
    signInWithEmailAndPassword as _signInWithEmailAndPassword,
    signOut as _signOut,
} from "firebase/auth"

import { firebaseAuth } from "../libs/firebase/config"
import { AuthUser } from "@/types"

const formatAuthUser = (user: User): AuthUser => ({
    uid: user.uid,
    email: user.email,
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

    const signInWithEmailAndPassword = (email: string, password: string) =>
        _signInWithEmailAndPassword(firebaseAuth, email, password)

    const createUserWithEmailAndPassword = (email: string, password: string) =>
        _createUserWithEmailAndPassword(firebaseAuth, email, password)

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
    }
}
