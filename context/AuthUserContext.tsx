"use client"

import React, { createContext, useContext } from "react"
import useFirebaseAuth from "@/hooks/useFirebaseAuth"
import { AuthUser } from "@/types"

const authUserContext = createContext<{
    authUser: AuthUser | null
    loading: boolean
    // signInWithEmailAndPassword: (
    //     email: string,
    //     password: string,
    // ) => Promise<UserCredential>
    // createUserWithEmailAndPassword: (
    //     email: string,
    //     password: string,
    // ) => Promise<UserCredential>
    // signOut: () => Promise<void>
}>({
    authUser: null,
    loading: true,
    // signInWithEmailAndPassword: async () => {},
    // createUserWithEmailAndPassword: async () => {},
    // signOut: async () => {},
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
