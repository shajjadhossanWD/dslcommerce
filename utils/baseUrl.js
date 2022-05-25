const baseUrl = process.env.NODE_ENV === "production"
    ? 'http://localhost:5009'
    : 'http://localhost:5009';

export default baseUrl;