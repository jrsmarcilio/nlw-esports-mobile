export interface RegisterParams {
    username: string;
    password: string;
  }
  
  export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined;
        register: RegisterParams;
      }
    }
  }