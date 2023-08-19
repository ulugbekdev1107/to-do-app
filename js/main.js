const btnClass = document.getElementsByClassName('btn')
const modals = document.querySelector('.modals')
const active = document.getElementsByClassName('active')
const appCard = document.querySelector('.main .app-card')
const inputList = document.querySelectorAll('.modals-main input[id="title"]');
const inputDate = document.querySelectorAll('.modals-main input[id="date"]');

const comment = document.querySelectorAll('.modals-main textarea');
const members = document.querySelectorAll('select[name="members"]')
const btnModals = () => {
 modals.classList.toggle('active');
}


// const btnSaveData = () => {
//   const inputListValue = inputList[0].value;
//   const commentValue = comment[0].value;
//   const inputDateValue = inputDate[0].value;

//   if (inputListValue && commentValue && inputDateValue) {
//     appCard.innerHTML = `
//       <header>
//         <h4 class="card-heading">${inputListValue}</h4>
//       <header>
//       <main>
//         <p class="card-paragriph">${commentValue}</p>
//       </main>
//       <footer>
//         <time>${inputDateValue}</time>
//       </footer>
//     `;
//     appCard.style.backgroundColor = "#9FE3E8";
//   } else {
//     console.log("Iltimos, barcha maydonlarni to'ldiring!");
//   }
// }


const createNewList = () => {
  const newList = document.createElement('div');
  newList.classList.add('app-card');
  newList.innerHTML = `
    <h4 class="card-heading">${inputList[0].value}</h4>
    <p class="card-paragriph">${comment[0].value}</p>
    <time>${inputDate[0].value}</time>
  `;
  newList.style.backgroundColor = "#9FE3E8";
  
  appCard.appendChild(newList);

}
function clearInput() {
  document.querySelector(".modals-main").reset("modals-main");
}