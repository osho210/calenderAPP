const host = "http://localhost:8080/api";
const url = path => `${host}/${path}`;

const header = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const post = async(path,body)=>{
    const options ={...header,method:"PP"}
}

//fetch処理の抽象メソッド
// Promiseは非同期処理の操作が完了したときに結果を返すもの
export const get = async path => {
    const resp = await fetch(url(path));
    const result = await resp.json()
    return result
}