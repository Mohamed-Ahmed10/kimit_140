/* eslint-disable react/prop-types */
export default function Course({ courseName, price = 0, children }) {
    return (
        <div>
            {children}
            <div>Course name : {courseName}</div>
            <div>Course price :  {price}</div>
            <hr />
        </div>
    )
}
