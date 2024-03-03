import PersonView from "../components/PersonView";

export const Persons = () => {
    const people = [
        {
            id: 0,
            name: 'Creola Katherine Johnson',
            profession: 'mathematician',
        },
        {
            id: 1,
            name: 'Mario José Molina-Pasquel Henríquez',
            profession: 'chemist',
        },
        {
            id: 2,
            name: 'Mohammad Abdus Salam',
            profession: 'physicist',
        },
        {
            id: 3,
            name: 'Percy Lavon Julian',
            profession: 'chemist',
        },
        {
            id: 4,
            name: 'Subrahmanyan Chandrasekhar',
            profession: 'astrophysicist',
        }
    ];

    let chemists = people.filter(person => person.profession === 'chemist')

    // console.log(chemists)
    return (
        <div>
            <h2>Persons</h2>
            <ol>
                {people.map(person => <PersonView key={person.id} person={person} />)}
            </ol>
            <hr />
            <h2>Chemists</h2>
            <ol>
                {
                    chemists.map(person =>
                        <PersonView key={person.id} person={person} />
                    )
                }
            </ol>
        </div>
    )
}
