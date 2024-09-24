import './PeopleList.css'
import Person from './Person'
function PeopleList() {
    
    const people = [{ name: 'Jakub', age:15}, {name: 'Maciek', age: 48}, {name: 'Bartek', age: 22}]

    const filteredPeople = people.filter((person) => person.age >= 18)

    function hoverPerson(index){
        console.log("Najechano na dziecko",index)
    }

    return <div className="wrapper">{filteredPeople.map((person, index) => {
        return <Person key={index} name={person.name} age={person.age} func={() => hoverPerson(index)}>
            <b>TEKST PRZEKAZANY JAKO DZIECKO</b>
            </Person>
})}</div>
}

export default PeopleList