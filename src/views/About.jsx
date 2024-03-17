import { useState } from 'react';

export default function About() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    let handlePerson = (ev) => {
        setPerson({
            ...person,
            [ev.target.name]: ev.target.value
        })
    }

    return (
        <>
            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handlePerson}
                    name="firstName"
                />
            </label>
            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handlePerson}
                    name="lastName"
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handlePerson}
                    name="email"
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </>
    );
}

