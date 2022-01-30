import * as api from  "../api/index.js"
export const sendEvent = async({nombre, correo, nPersonas, fecha}) => {
    try {
        const {data} = await api.sendEvent({nombre, correo, nPersonas, fecha});
        return data;
    }
    catch (error) {
        console.log(error)
    }
}
export const getSabores = async(categoria) =>
{
    try {
        const {data} = await api.getSabores(categoria);
        return data;
    }
    catch (error) {
        console.log(error)
    }
}
export const getCategorias = async() => {
    try {
        const {data} = await api.getCategorias();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const postID = async(id) => {
    try {
        const resp = await api.postID(id);
        return resp;
    }
    catch(err){
        console.log(err);
    }
}