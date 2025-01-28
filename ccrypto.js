import {route, setApiHeader} from '../route';
interface IPayload {
    id: string,
    action: 'dislike' | 'like',
}
export async function changeArticleRating(payload: IPayload) {
    const res = await fetch(`${route()}/change_rd`, {
        method: 'POST',
        headers: setApiHeader(),
        body: JSON.stringify(payload),
    });
    return await res.json();
}
