'use server'

import { handleError } from "@/lib/utils"
import { CreateUser } from "@/types"
import { connectToDatabase } from ".."
import User from "../models/user.model"

export const createUser = async (user: CreateUser) => {
    try{
        await connectToDatabase();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));

    }catch(error){
        handleError(error)
    }
}