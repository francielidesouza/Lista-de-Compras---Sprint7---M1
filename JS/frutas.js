const frutas = [
    {
        id: 1,
        image: "./IMG/1_uvaCrimson.png",
        name: "Uva Crimson",
        descricao: "Fruta sem sementes, leve e saborosa. Cotém antioxidantes que retardam o envelhecimento dos tecidos do corpo, ajudam na saúde do intestino e são ótimos para o coração.",
        price: 29.99,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Ácida', 'Doce']
    },
    {
        id: 2,
        image: "./IMG/2_abacateQuintal.png",
        name: "Abacate",
        descricao: "Possui uma polpa cremosa, sendo ideal no prepara de sucos e smoothies. Rica em fibras, potássio, sódio, magnésio, vitamina A, C, E, K 1, folato, B-6, niacina, ácido pantatênico, riboflavina, colina, luteína, zeaxantina, criptoxantina, fitoesteróis e gorduras monoinsaturada, que ajudam a diminuir hipertensão e colesterol total e LDL e aumenta HDL, entre outros.",
        price: 13.59,        
        addFruit: "Adicionar ao carrinho",
        categoria: ['Oleaginosa']
    },
    {
        id: 3,
        image: "./IMG/3_abacaxiVitoria.png",
        name: "Abacaxi",
        descricao: "Abacaxi Vitória com polpa branca é saboroso e tem elevado teor de açúcares, além disso, melhora a digestão e aumenta a imunidade. A fruta possui diversos nutrientes que ajudam a evitar doenças, como vitaminas A, C, B1, B2, B3, B5, B6 e B9, além de potássio, manganês e magnésio. ",
        price: 9.99,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Ácida']
    },
    {
        id: 4,
        image: "./IMG/4_amoraPretaXingu.png",
        name: "Amora Preta",
        descricao: "Pode ser consumida tanto pura, como também em diversas receitas(cucas, geleias, sucos...). Entre os benefícios estão: a ação antioxidante, diminui a glicemia, ajuda na diminuição dos sintomas da menopausa, colabora na prevenção de doenças cancerígenas  e coronarianas, dentre outras.",
        price: 50.89,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Ácida', 'Doce']
    },
    {
        id: 5,
        image: "./IMG/5_morangoSanAndreas.png",
        name: "Morango",
        descricao: "Rico em antioxidantes, como antocianinas e o ácido elágico, que conferem outros benefícios para a saúde como combater o envelhecimento da pele, ajudar a prevenir doenças cardiovasculares, melhorar a capacidade mental, prevenir o câncer e ajudar a combater inflamações.",
        price: 7.98,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Ácida', 'Doce']
    },
    {
        id: 6,
        image: "./IMG/6_melancia.png",
        name: "Melancia",
        descricao: "É bastante refrescante, possui vitamina C, A, além de minerais. Por ter muita água, esta fruta ajuda a hidratar o organismo. O consumo regular ajuda a prevenir doenças cardiovasculares e melhora a imunidade. Além de ser ingerida na forma in natura, o suco de melancia é bastante popular.",
        price: 11.99,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Hiper-hídrica']
    },
    {
        id: 7,
        image: "./IMG/7_melaoGalia.png",
        name: "Melão",
        descricao: "É um alimento rico em água que melhora o funcionamento do intestino, evitando a prisão de ventre e ajudando na hidratação do corpo. Contém propriedades diuréticas e antioxidantes, ajudando a diminuir a retenção de líquidos e a prevenir o envelhecimento precoce da pele. Além disso, é rico em nutrientes como cálcio, potássio e fibras, ajuda a fortalecer os ossos e dentes, reduzir a pressão arterial e favorecer a perda de peso...",
        price: 18.79,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Hiper-hídrica']
    },
    {
        id: 8,
        image: "./IMG/8_pessegoFascinio.png",
        name: "Pêssego",
        descricao: "É uma fruta pouco calórica que pode ser consumida in natura ou em calda e fazer parte de diversas receitas doces e salgadas.O pêssego apresenta antioxidantes, vitaminas, minerais, fibras e carboidratos. Comer a fruta ajuda no funcionamento do intestino, aumenta a imunidade e faz bem para pele.",
        addFruit: "Adicionar ao carrinho",
        price: 21.49,
        categoria: ['Ácida']
    },
    {
        id: 9,
        image: "./IMG/9_peraHosui.png",
        name: "Pêra",
        descricao: "Tem um sabor suave, embora elas sejam muito suculentas com pouquíssimas calorias e são recheadas de muitas fibras. São muito utilizadas para saciar a sede. Com propriedades anti-câncerigenas, recomendada para saúde dos ossos, dentes e olhos, entre outros...",
        price: 14.99,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Semiácida']
    },
    {
        id: 10,
        image: "./IMG/10_tangerinaPonkan.png",
        name: "Tangerina",
        descricao: "É uma fruta ácida de savbor adocicado e é rica em antioxidantes, vitaminas e minerais importantes para a saúde do corpo e da mente, além de retardar o envelhecimento da pele, ela melhora a digestão, regula a pressão sanguínea, protege o coração e reduz o risco de desenvolver várias doenças, como câncer, diabetes e osteoporose.",
        addFruit: "Adicionar ao carrinho",
        price: 6.69,
        categoria: ['Ácida']
    },
    {
        id: 11,
        image: "./IMG/11_carambola.png",
        name: "Carambola",
        descricao: "É saborosa, rica em sais minerais (cálcio, fósforo e ferro), fonte de vitaminas A, C e do complexo B, e por conter baixas calorias (aproximadamente 35 calorias em 100g). A carambola ainda é rica em antioxidantes, por ser uma potente fonte primária e secundária de polifenóis antioxidantes. Oferece diversos benefícios para a saúde tais como: auxilia no combate a febre, é eficaz contra escorbuto e também é utilizada como estimulador de apetite. As sementes trituradas servem como um sedativo em casos de asma e cólicas..",
        price: 4.99,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Semiácida']
    },
    {
        id: 12,
        image: "./IMG/12_goiabaTailandesa.png",
        name: "Goiaba",
        descricao: "A goiaba é uma fruta capaz de promover a melhora da saúde do trato gastrointestinal, aumentar as defesas do organismo, favorecer a perda de peso e promover a saúde da pele, já que é rica em fibras, antioxidantes e outros nutrientes, como as vitaminas A, B e C. É muito utilizada no preparo de geleias, goibada, junto com queijos no café da manhã... ",
        price: 4.99,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Semiácida']
    },
    {
        id: 13,
        image: "./IMG/13_ameixaBlackAmbar.png",
        name: "Ameixa",
        descricao: "A ameixa é uma fruta com alto valor nutricional, com diversos efeitos benéficos para a saúde. Consumido in natura, saladas de frutas, sucos ou ameixa seca. É rica em vitamina C, antioxidantes, previne pressão alta e derrame, dentre outros...",
        addFruit: "Adicionar ao carrinho",
        price: 13.40,
        categoria: ['Semiácida']
    },
    {
        id: 14,
        image: "./IMG/14_frutaDoConde.png",
        name: "Fruta do Conde",
        descricao: "A fruta pé utilizada no preparo de pudins, sucos ou mesmo consumida in natura. Previne e ajuda no tratamento da diabetes, tem ação anti-inflamatória, seus antioxidantes previnem câncer e envelhecimento precoce, entre outros.",
        addFruit: "Adicionar ao carrinho",
        price: 20.00,
        categoria: ['Semiácida']
    },
    {
        id: 15,
        image: "./IMG/15_cocoSeco.png",
        name: "Côco Seco",
        descricao: "É um alimento muito versátil, podendo ser incorporado na alimentação através dos seus derivados - como o óleo, a farinha e o leite de coco - ou pode ser consumido in natura por meio de sua água e da polpa. É considerado uma das frutas mais nutritivas do mundo. Sua polpa é repleta de sais minerais, como cálcio, magnésio, zinco, ferro, selênio, manganês, fósforo e potássio, é fonte de vitaminas A, B, C e E, antioxidantes (flavonoides) e muitas fibras..",
        price: 8.19,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Oleaginosa']
    },
    {
        id: 16,
        image: "./IMG/16_acerola.png",
        name: "Acelora",
        descricao: "Conhecida pelo elevado teor de ácido ascórbico (Vitamina C), contudo também contém vitamina A, B1, B2, B3, cálcio, fósforo e ferro. Muito utilizada em sucos. Esta fruta é bastante utilizada por pessoas com gripe, afecções pulmonares, doenças do fígado, doenças nasais e gengivais",
        price: 9.99,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Ácida']
    },
    {
        id: 17,
        image: "./IMG/17_limaoTaiti.png",
        name: "limão",
        descricao: "É um excelente antioxidante e rico em fibras solúveis que ajudam a diminuir o apetite e regular o intestino, sendo muito utilizado para temperar peixes, mariscos e frango, além de sucos.",
        price: 3.10,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Ácida']
    },
    {
        id: 18,
        image: "./IMG/18_laranjaPera.jpg",
        name: "Laranja",
        descricao: "Utilizada no preparo de sucos, a fruta é rica em vitamina C, possui flavonoides e diversos nutrientes importantes para prevenir doenças e deixar o organismo mais resistente. Entre seus benefícios estão a redução do risco de AVC, prevenção de pedras nos rins, duminuição do colesterol,dentre outros.",
        price: 8.19,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Ácida']
    },
    {
        id: 19,
        image: "./IMG/19_nectarinaSunripe.png",
        name: "Nectarina",
        descricao: "É altamente nutritiva e saborosa, geralmetne consumida in natura. É indicada para a alimentação de mulheres grávidas, pois é fonte de ácido fólico (vitamina B9), fonte de pectina, fibra solúvel que ajuda no controle do colesterol, também possui alto teor de vitaminas A e C",
        price: 8.19,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Ácida']
    },
    {
        id: 20,
        image: "./IMG/20_bananaCaturra.png",
        name: "Banana",
        descricao: "É uma fruta que traz diversos benefícios para a saúde, como fornecer energia para o corpo, reduzir a pressão arterial, evitar cãibras musculares e favorecer o aumento da serotonina, combatendo a depressão e melhorando o humor.É rica em carboidratos, fibras, potássio e magnésio, assim como vitaminas do complexo B e C. Além disso, essa fruta é muito versátil, podendo ser consumida madura ou verde, crua ou cozida, inteira ou amassada, além de poder ser utilizada na preparação de pratos doces e salgados.",
        price: 5.69,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Doce']
    },
    {
        id: 21,
        image: "./IMG/21_maracujaAzedo.png",
        name: "Maracujá",
        descricao: "Pode ser combinado com peixes, mousse, creme, suco, e outros. Rico em flavonoides, vitamina A e vitamina C, que podem ajudar no tratamento de diversas doenças, como ansiedade, hiperatividade, e no tratamento de problemas de sono. Além disso, o maracujá ainda é rico em minerais como o potássio e magnésio e tem boas quantidades de fibras, promovendo o controle dos níveis de glicose no sangue, ajudando na perda de peso e prevenindo problemas crônicos, como envelhecimento precoce, colesterol alto ou pressão alta.",
        price: 6.19,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Ácida', 'Azeda']
    },
    {
        id: 22,
        image: "./IMG/22_macaFuji.png",
        name: "Maçã",
        descricao: " Pouco calórica e repleta de nutrientes e vitaminas essenciais (como a vitamina C), sobretudo na casca, é uma das frutas mais comuns em dietas. É utilizada na fabricação de vinagres, sucos, bolos, sobremesas entre outros.",
        price: 4.55,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Semiácidas','Doce']
    },
    {
        id: 23,
        image: "./IMG/23_mamaoPapaya.png",
        name: "Mamão Papaya",
        descricao: "Sua polpa é doce e macia, a cor varia do amarelo-pálido até o laranja. O mamão pode ser consumido in natura, na forma de doces, sucos e saladas. É rico em nutrientes, contém grandes quantidades de sais minerais, Cálcio, Fósforo, Ferro, Sódio e Potássio, Vitaminas A e C. Tem propriedades laxativas e calmantes. Possui a enzima Papaína, que auxilia na digestão dos alimentos e absorção de nutrientes pelo organismo.",
        price: 5.99,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Doce']
    },
    {
        id: 24,
        image: "./IMG/24_pomeloRubyRed.png",
        name: "Pomelo",
        descricao: "É uma fruta amarga, muito utiliza na fabricação de refrigerantes e sucos. É uma ótima pedida para quem gosta de bebidas amargas e sem teor alcoolico. Ajuda o sistema imunológico pela sua vitamina C, auxilia no combate as doenças que afetam a pele e ao câncer de próstata devido a presença do licopeno, Rico em potássio, ajuda a prevenir dores e mal estares que atinjam os músculos, além de fortalecer os ossos e prevenir a osteoporose, etc.",
        price: 8.19,
        categoria: ['Ácida', 'Amarga']
    },
    {
        id: 25,
        image: "./IMG/25_jaca.png",
        name: "Jaca",
        descricao: "As jacas são frutos de grandes dimensões apreciados por serem suculentos, aromáticos e saborosos, podendo ser consumida fresca, seca e em conserva. Alguns de seus benefícios são: potássio que ajuda a reduzir a pressão arterial. É uma boa fonte de vitamina A, vitamina C, tiamina, niacina, ferro, sódio, cálcio, fibras, fósforo, etc. Rica em fitonutrientes, a jaca pode ajudar a combater o câncer e retardar a degeneração celular. As folhas da jaqueira são úteis para curar a febre, furúnculos e doenças de pele. O látex do fruto é útil no tratamento de faringite.",
        price: 8.19,
        addFruit: "Adicionar ao carrinho",
        categoria: ['Doce']
    }
]
