import PageImg from './assets/images/404.png';
function PageNotFound() {
    return (
        <div style={{ textAlign: 'center', }}>
            <h1>Page Not Found</h1>

            <img style={{ width: "60%" }} src={PageImg} alt="404image" />
        </div>
    )
}
export default PageNotFound;