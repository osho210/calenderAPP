//サーバーのAPIを利用して処理を行っている

const host = "http://localhost:8080/api";
const url = path => `${host}/${path}`;

const header = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const post = async (path, body) => {
    //bodyタグの情報をjsonに変換して受け取っている
    const options = { ...header, method: "POST", body: JSON.stringify(body) }
    const resp = await fetch(url(path), options);
    checkError(resp.status)
    const result = await resp.json();
    return result
}

//fetch処理の抽象メソッド
// Promiseは非同期処理の操作が完了したときに結果を返すもの
export const get = async path => {
    const resp = await fetch(url(path));
    //errorを見つける
    checkError(resp.status)
    const result = await resp.json()
    return result
}

//登録した情報を削除するapi関数
export const deleteRequest = async path => {
    const options = { method: "DELETE" };
    const resp = await fetch(url(path), options)
    checkError(resp.status)

    //削除が成功した場合204コマンドが返却される
    // awaitの処理が終わるのを待ってreturnをしている
    return;
}

// エラー出力
const checkError = status => {
    if (status >= 400) {
        throw new Error("エラーが発生しました。時間をおいて再度お試しください")
    }
}