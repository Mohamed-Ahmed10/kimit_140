/* eslint-disable react/prop-types */
function Item({ name, isPacked }) {
    // return <li className="item">{isPacked ? name + " ✔" : name}</li>;
    return <li className="item">{name} {isPacked && " ✔"}</li>;
}

export default function ConditionalExplain() {
    return (
        <section>
            <h1>Sally Rides Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={false}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}