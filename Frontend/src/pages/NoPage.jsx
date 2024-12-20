import { Link } from "react-router-dom";

const NoPage = () => {
    return (
        <>
            <h1 className="ml-96 mt-44 my-6 text-7xl">404 Page not Found</h1>
            <Link to="/" className="ml-96 underline text-4xl">Go Home</Link>
        </>
    )
}

export default NoPage;