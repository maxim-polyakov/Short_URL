import { $host } from '../index';


export const ShortUrl = async (url) => {
    try
    {
        const { data } = await $host.post('/api/url/short_url', {url});

        console.log(data);

        if (data?.error)
            throw new Error(data.error);

        return data;
    }catch (error)
    {
        alert(error);

        return {
            error: error.message
        };
    }
};
