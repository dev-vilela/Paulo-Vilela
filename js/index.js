document.addEventListener('DOMContentLoaded', () => {
    menuRwd()
})

function menuRwd() {
    const body = document.body
    const categoriasBox = document.querySelector('.header-categorias-box')
    const btn = document.querySelector('.header-menu-rwd-btn')
    const categorias = document.querySelectorAll('.header-categoria-link')

    categorias.forEach(categoria => {
        categoria.addEventListener('click', mostrarSecao)
    })


    btn.addEventListener('click', () => {
        categoriasBox.classList.toggle('header-menu-visivel')

        if (categoriasBox.classList.contains('header-menu-visivel')) {
            btn.src = 'img/botao-fechar.png'

            removerScroll()
        }
        else {
            btn.src = 'img/cardapio.png'

            adicionarScroll()
        }
    })

    function mostrarSecao() {
        btn.src = 'img/cardapio.png'

        categoriasBox.classList.remove('header-menu-visivel')

        body.classList.add('scroll-visivel')
    }

    function removerScroll() {
        body.classList.remove('scroll-visivel')
        body.classList.add('scroll-escondido')
    }

    function adicionarScroll() {
        body.classList.remove('scroll-escondido')
        body.classList.add('scroll-visivel')
    }
}