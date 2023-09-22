import PropTypes from "prop-types"

const PageBanner = ({title = "Another"}) => {
    return (
        <>
            <section className="py-14 bg-fuchsia-50 ">
                <h1 className="font-bold text-3xl px-5 lg:px-0 lg:text-4xl text-center text-gray-900">{title}</h1>
            </section>   
        </>
    );
};

PageBanner.propTypes = {
    title : PropTypes.string.isRequired
}

export default PageBanner;