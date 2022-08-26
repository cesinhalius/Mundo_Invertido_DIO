import { subscribeToHellfireClub } from "./firebase/Hellfire_Club.js";

const Name = document.getElementById("txtName");
const Email = document.getElementById("txtEmail");
const Level = document.getElementById("txtLevel");
const Character = document.getElementById("txtCharacter");
const Subscribe = document.getElementById("btnSubscribe");

/* Adicionando no banco de dados*/
Subscribe.addEventListener("click", async () => {
  const subscription = {
    name: Name.value,
    email: Email.value,
    level: Level.value,
    character: Character.value,
  };

  const subscriptionId = await subscribeToHellfireClub(subscription);
  alert(`Inscrido com sucesso: ${subscriptionId}`);

  Name.value = ''
  Email.value = ''
  Level.value = ''
  Character.value = ''
});
