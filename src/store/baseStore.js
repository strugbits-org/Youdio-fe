import { createSlice } from "@reduxjs/toolkit";

// const initAction = async (
//     indentifier,
//             cbAction,
//             successCb,
//             errorCb,
//             ...params
// ) => { 
//     this.toggleLoader(indentifier)
//             try {
//                 await cbAction(...params);
//                 successCb?.();
//             } catch (error: any) {
//                 errorCb?.(error)
//             } finally {
//                 this.toggleLoader(indentifier)
//             }
// }

const initialState = {
    isLoading: []
}

const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        // initAction: (
        //     indentifier,
        //     cbAction,
        //     successCb,
        //     errorCb,
        //     ...params
        // ) => {

        // },
        // toggleLoader(indentifier) {
        //     const array = [...this.isLoading]
        //     if (array.includes(indentifier)) {
        //         const index = array.indexOf(indentifier);
        //         array.splice(index, 1);
        //     } else {
        //         array.push(indentifier);
        //     }

        //     this.isLoading = array;
        // },
        // loading(indentifier) {
        //     return this.isLoading.includes(indentifier)
        // },

    }
})

// export const useBaseStore = defineStore("base", {
//     actions: {
//         async initAction(
//             indentifier: String,
//             cbAction: Function,
//             successCb?: Function,
//             errorCb?: (error: Error) => void | undefined,
//             ...params: Parameters<any>
//         ) {
//             this.toggleLoader(indentifier)
//             try {
//                 await cbAction(...params);
//                 successCb?.();
//             } catch (error: any) {
//                 errorCb?.(error)
//             } finally {
//                 this.toggleLoader(indentifier)
//             }
//         },
//         toggleLoader(indentifier: String) {
//             const array = [...this.isLoading]
//             if (array.includes(indentifier)) {
//                 const index = array.indexOf(indentifier);
//                 array.splice(index, 1);
//             } else {
//                 array.push(indentifier);
//             }

//             this.isLoading = array;
//         },
//         loading(indentifier: any) {
//             return this.isLoading.includes(indentifier)
//         },
//     },
// })
