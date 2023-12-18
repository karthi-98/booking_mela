export type CreateUser = {
    clerkId : string,
    email: string,
    userName : string,
    firstName : string,
    lastName : string,
    phoneNumber?: string,
    photo: string
}

export type UpdateUserParams = {
    firstName: string
    lastName: string
    username: string
    photo: string
  }