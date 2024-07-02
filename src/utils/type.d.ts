
export type alertData = { msg:string, type:string };
export type authDataType = { isLogin:boolean, appData: any };

export type AppContextType = {
   alert: alertData | undefined,
   userData: userDataType | null,
   setUserData: (data:any) => void,
   showAlert:(msg:string, type:string) => void,
}

export type userDataType = {
   username: string,
   email: string,
   firstName: string,
   lastName: string,
   gender: string,
   image: string,
   token: string
}