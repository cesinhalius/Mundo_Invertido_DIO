const Name = document.getElementById('txtName');
const Email = document.getElementById('txtEmail');
const Level = document.getElementById('txtLevel');
const Character = document.getElementById('txtCharacter');

const Subscribe = document.getElementById('btnSubscribe');


Subscribe.addEventListener('click', () => {
    const subscription = {
        name: Name.value,
        email: Email.value,
        level: Level.value,
        character: Character.value
    }
});


