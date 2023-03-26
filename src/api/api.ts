export const cmsApiUrl = `${import.meta.env.PUBLIC_CMS_API_URL}${import.meta.env.PUBLIC_CMS_API_ENDPOINT}`;
export const authHeaders = { Authorization: `${import.meta.env.SECRET_CMS_API_TOKEN}` };