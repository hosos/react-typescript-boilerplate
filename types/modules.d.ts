declare interface IReduxModule {
    path?: string;
    moduleName: string;
    order?: number;
    reducers?: object;
    reducerEnhancers?: any;
    initialState?: object;
    middlewares?: any[] | any;
    enhancers?: any;
    render?: (Component: any) => any;
    onStoreCreate?: (modules: IReduxModule[]) => void;
    [extraProps: string]: any;
}