import { cmsApiUrl, authHeaders } from "./api"

export const getAboutData = async (fetchFn: Function, config?: object | undefined) => {
    const response = await fetchFn(`${cmsApiUrl}/about`, { ...config, headers: authHeaders });
    const aboutData = await response.json();
    return aboutData.data.attributes;
}