const users = [
    {
        id: 1,
        name: "Victor",
        avatar: "https://i.pravatar.cc/60?img=56",
        bio: "Desenvolvedor Front-End, apaixonado por sites e desenvolvimento web"
    },
    {
        id: 2,
        name: "Eduardo Leal",
        avatar: "https://i.pravatar.cc/60?img=55",
        bio: "Estudante de informática, trabalho numa loja de manutenção de computadores e assistência remota e presencial."
    },
    {
        id: 3,
        name: "Ana Vitória",
        avatar: "https://i.pravatar.cc/60?img=5",
        bio: "Trabalho numa loja de óculos e amo investigações policiais, formada em técnico em analises clinicas "
    }
];

const loadBtn = document.querySelector('.load-btn')
const cardsContainer = document.querySelector('.cards-container')

function createUser(user){
    return `
        <div class="card">
            <img class="avatar" src="${user.avatar}" alt="usuario">
            <div class="content">
                <h3>${user.name}</h3>
                <p>${user.bio}</p>
            </div>
        </div>

    `
}

function createSkeleton(){
    return `
        <div class="card">
            <div class="skeleton skeleton-card"></div>
            <div class="skeleton-content">
                <div class="skeleton skeleton-title"></div>
                <div class="skeleton skeleton-text"></div>
                <div class="skeleton skeleton-text short"></div>
            </div>
        </div>
        
    `
}


function loadData(){
    loadBtn.disabled = true
    loadBtn.textContent = 'Carregando...'

    cardsContainer.innerHTML = users.map(createSkeleton).join('')


    setTimeout(() => {

        cardsContainer.innerHTML = users.map(createUser).join('')

        loadBtn.disabled = false
        loadBtn.textContent = 'Recarregar'

    }, 2000);
}





loadBtn.addEventListener('click', loadData)