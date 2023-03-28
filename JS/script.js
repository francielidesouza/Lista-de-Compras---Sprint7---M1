
function criarTemplate() {

    // 1) CRIAR AS TAGS DO TEMPLATE
    let main = document.createElement('main')
    let header = document.createElement('header')
    let title = document.createElement('h1')
    let productsList = document.createElement('ul')
    let shoppingList = document.createElement('ul')
    let section = document.createElement('section')
    let total = document.createElement('p')
    let finish = document.createElement('button')

    // 2) ADIOCIONAR CLASSE ÀS TAGS
    main.classList.add('main')
    header.classList.add('header')
    title.classList.add('title')
    productsList.classList.add('productsList')
    shoppingList.classList.add('shoppingList')
    section.classList.add('section')
    total.classList.add('total')
    finish.classList.add('buttonFinish')

    // 3) ATRIBUIR VALOR ÀS PROPRIEDADES
    title.innerText = 'Virtual Market'
    finish.innerText = 'Finalizar Compra'

    // 4) VINCULAR AS TAGS HIERARQUICAMENTE
    main.append(header, productsList, shoppingList, section)
    header.appendChild(title)
    section.append(total, finish)

    // 5) PENDURAR A TAG AO HTML (BODY)
    const body = document.querySelector('body').appendChild(main)
}
criarTemplate()


function criarTemplateFrutas(frutas) {

    for (let i = 0; i < frutas.length; i++) {

        // 1) CRIAR AS TAGS DO TEMPLATE
        let productsDetail = document.createElement('li')
        let figureImg = document.createElement('figure')
        let imageFruit = document.createElement('img')
        let fruit = document.createElement('h3')
        let priceFruit = document.createElement('p')
        let buttonAdd = document.createElement('button')

        // 2) ADIOCIONAR CLASSE ÀS TAGS
        productsDetail.classList.add('productsDetail')
        figureImg.classList.add('figureImg')
        imageFruit.classList.add('imageFruit')
        fruit.classList.add('nameFruit')
        priceFruit.classList.add('priceFruit')
        buttonAdd.classList.add('productButton', 'buttonAdd')

        // 3) ATRIBUIR VALOR ÀS PROPRIEDADES
        productsDetail.id = 'fruitId_' + frutas[i].id;
        fruit.innerText = frutas[i].name
        imageFruit.src = frutas[i].image
        imageFruit.alt = frutas[i].name
        priceFruit.innerText = formatPrice(frutas[i].price)
        buttonAdd.id = 'fruitAdd_' + frutas[i].id
        buttonAdd.innerText = 'Adicionar ao Carrinho'

        // 4) VINCULAR AS TAGS HIERARQUICAMENTE
        productsDetail.append(figureImg, fruit, priceFruit, buttonAdd)
        figureImg.appendChild(imageFruit)

        // 5) PENDURAR A TAG  (LI) À TAG (UL) CRIADA PELO DOM
        const productsList = document.querySelector('.productsList').appendChild(productsDetail)

    }
}
criarTemplateFrutas(frutas)

let botoesProduto = document.querySelectorAll('.productButton')

for (let i = 0; i < botoesProduto.length; i++) {
    
    let botao = botoesProduto[i]
   
    botao.addEventListener('click', function (event) {
       
        let idElemento = event.target.id
      
        let idBotao = Number(idElemento.substring(9))
    
        let fruta = procurarFruta(idBotao)

       let frutaAdicionada = adicionarFruta(fruta)

       let totalCarrinho =  addTotal(carrinhoFrutas)

      let tagTotal = document.querySelector('.total')

      tagTotal.innerText = formatPrice(totalCarrinho)
  

      document.querySelector('.shoppingList').appendChild(frutaAdicionada)

    //===========================================
    
    


    })
}

let botoesRemover = document.querySelectorAll('.buttonRemove')
console.log(botoesRemover);
    for (let i = 0; i < botoesRemover.length; i++) {
        
        let botaoRemover = botoesRemover[i]
        
        botaoRemover.addEventListener('click', function (event) {

            let idElemento = event.target.id
      
            let idBotao = Number(idElemento.substring(9))
           
            let fruta = procurarFruta(idBotao)

            let totalCarrinho =  addTotal(frutasRemovidas)
     
           let tagTotal = document.querySelector('.total')
     
           tagTotal.innerText = formatPrice(totalCarrinho)

           frutasRemovidas.push(fruta)

            let cardDevolucao = document.querySelector('#boughtFruit_'+ fruta.id)         
          
            cardDevolucao.remove()
            console.log(cardDevolucao);
        // document.querySelector('.shoppingList').appendChild(frutaAdicionada)
            

        })
    }
       

function procurarFruta(idBotao) {

    for (let i = 0; i < frutas.length; i++) {
        let fruta = frutas[i]

        if (fruta.id == idBotao) {
            console.log(fruta);
            return fruta
        }
    }
    return `Fruta não encontrada`
}

let carrinhoFrutas =[]

let frutasRemovidas = []

function adicionarFruta(fruta) {

    carrinhoFrutas.push(fruta)
  
    // 1) CRIAR AS TAGS DO TEMPLATE
    let purchaseDetails = document.createElement('li')
    let figureImg = document.createElement('figure')
    let imageFruit = document.createElement('img')
    let fruit = document.createElement('h3')
    let priceFruit = document.createElement('p')
    let buttonRemove = document.createElement('button')
    // 2) ADIOCIONAR CLASSE ÀS TAGS
    purchaseDetails.classList.add('purchaseDetails')
    figureImg.classList.add('figureImg')
    imageFruit.classList.add('imageFruit')
    fruit.classList.add('nameFruit')
    priceFruit.classList.add('priceFruit')
    buttonRemove.classList.add('productButton', 'buttonRemove')
    // 3) ATRIBUIR VALOR ÀS PROPRIEDADES
    purchaseDetails.id = 'boughtFruit_' + fruta.id;
    fruit.innerText = fruta.name
    imageFruit.src = fruta.image
    imageFruit.alt = fruta.name
    priceFruit.innerText = formatPrice(fruta.price)
    buttonRemove.id = 'fruitBuy_' + fruta.id
    buttonRemove.innerText = 'Remover do Carrinho'
    
    // 4) VINCULAR AS TAGS HIERARQUICAMENTE
    purchaseDetails.append(figureImg, fruit, priceFruit, buttonRemove)
    figureImg.appendChild(imageFruit)
    // 5) PENDURAR A TAG  (LI) À TAG (UL) CRIADA PELO DOM
    const shoppingList = document.querySelector('.shoppingList').appendChild(purchaseDetails)

    return shoppingList
}

function formatPrice(value) {

    let priceFormatted = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return priceFormatted
}
// console.log(formatPrice(25.99));

function addTotal(frutas) {

    let total = 0

    for (let i = 0; i < frutas.length; i++) {
        
        total += frutas[i].price
    }
    return total
}
// console.log(addTotal(frutas));


