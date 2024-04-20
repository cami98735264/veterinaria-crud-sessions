const url = process.env.REACT_APP_HTTP_LOCAL_TESTING
const RequestURL = () => url === "true" ? "http://192.168.1.7:3000" : "http://localhost:3000";

export default RequestURL;