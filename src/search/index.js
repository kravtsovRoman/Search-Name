import React from 'react';
import people from './people.json';

export default class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filtered: people
        };
    }

    mapPerson(person, index) {
        return <li key={index} > <b>{index + 1}.</b> {person.name} </li>;
    }

    handleChange(e) {
        const {value} = e.target;

        const filtered = people.filter((person) => {
            return person.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
        });

        this.setState({ filtered });
    }

    render() {
        return (
            <div>
                <ul>
                    <input type='text' onChange={this.handleChange.bind(this)} />
                    { this.state.filtered.map(this.mapPerson.bind(this)) }
                </ul>
            </div>
        );
    }
}
