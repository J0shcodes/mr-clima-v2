"use client"

import React, { createContext, useContext } from "react"
import useFirebaseAuth from "@/hooks/useFirebaseAuth"
import { AuthUser } from "@/types"

const authUserContext = createContext<{
    authUser: AuthUser | null
    loading: boolean
    signInWithEmailAndPassword: (
        email: string,
        password: string,
    ) => Promise<string | undefined>
    createUserWithEmailAndPassword: (
        email: string,
        password: string,
    ) => Promise<string | undefined>
    signOut: () => Promise<void>
    signInWithGoogle: () => Promise<string | undefined>
}>({
    authUser: null,
    loading: true,
    signInWithEmailAndPassword: async () => {
        return undefined
    },
    createUserWithEmailAndPassword: async () => {
        return undefined
    },
    signOut: async () => {},
    signInWithGoogle: async () => {
        return undefined
    },
})

export function AuthUserProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const auth = useFirebaseAuth()
    return (
        <authUserContext.Provider value={auth}>
            {children}
        </authUserContext.Provider>
    )
}

export const useAuth = () => useContext(authUserContext)
