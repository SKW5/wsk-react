import propTypes from "prop-types";

const greeting = (props) => {
    console.log(props);
    const {name, age, isTeacher} = props;
    let teacherstatus = '';

    if (isTeacher) {
        teacherstatus = 'olet opettaja';
    } else {
        teacherstatus = 'et ole opettaja';
    }

    return (
        <div>
            <p>Hei nimesi on {name} ikäsi on {age} ja {teacherstatus}</p>
        </div>
    );
}

//kevyt tyyppi tarkastus
greeting.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    isTeacher: propTypes.bool,
}

export default greeting;