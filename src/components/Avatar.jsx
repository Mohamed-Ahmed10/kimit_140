export default function Avatar() {
    var source = "https://i.imgur.com/7vQD0fPs.jpg",
        alternative = "Gregorio Y. Zara",
        courseName = "Front end course";
    return (
        <div style={{ backgroundColor: 'red' }}>
            <img
                className="avatar"
                src={source}
                alt={alternative}
            />
            {courseName}
        </div>
    );
}
