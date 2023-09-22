import PropTypes from 'prop-types';

const SectionTitle = ({title, text}) => {
    return (
        <>
            <div className="mb-7 mt-8">
                <h3 className="text-center text-3xl lg:text-5xl font-bold mb-4">{title}</h3>
                <p className="text-base font-medium text-gray-500 text-center max-w-[500px] mx-auto">{text}</p>
            </div>
        </>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default SectionTitle;