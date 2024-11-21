import coffeTradicional from '../../assets/tradicional.png'
import coffeAmericano from '../../assets/americano.png'
import coffeCremoso from '../../assets/cremoso.png'
import coffeGelado from '../../assets/gelado.png'
import coffeComLeite from '../../assets/cafe-com-leite.png'
import coffeLatte from '../../assets/latte.png'
import coffeCapuccino from '../../assets/capuccino.png'
import coffeMacchiato from '../../assets/macchiato.png'
import coffeMocaccino from '../../assets/mocaccino.png'
import chocolateQuente from '../../assets/chocolate-quente.png'
import coffeCubano from '../../assets/cubano.png'
import coffeHavaiano from '../../assets/havaiano.png'
import coffeArabe from '../../assets/arabe.png'
import coffeIrlandes from '../../assets/irlandes.png'

const coffeData = [
    {
        image: coffeTradicional,
        type: ['TRADICIONAL'],
        title: 'Expresso tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90   
    },
    {
        image: coffeAmericano,
        type: ['TRADICIONAL'],
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90   
    },
    {
        image: coffeCremoso,
        type: ['TRADICIONAL'],
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90   
    },
    {
        image: coffeGelado,
        type: ['TRADICIONAL', '/' , 'GELADO'],
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90   
    },
    {
        image: coffeComLeite,
        type: ['TRADICIONAL', '/' , 'COM LEITE'],
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90   
    },
    {
        image: coffeLatte,
        type: ['TRADICIONAL', '/' , 'COM LEITE'],
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90   
    },
    {
        image: coffeCapuccino,
        type: ['TRADICIONAL', '/' , 'COM LEITE'],
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90   
    },
    {
        image: coffeMacchiato,
        type:  ['TRADICIONAL', '/' , 'COM LEITE'],
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90   
    },
    {
        image: coffeMocaccino,
        type:  ['TRADICIONAL', '/' , 'COM LEITE'],
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90   
    },
    {
        image: chocolateQuente,
        type:  ['ESPECIAL', '/' , 'COM LEITE'],
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90   
    },
    {
        image: coffeCubano,
        type: ['ESPECIAL', '/' , 'ALCOÓLICO', '/' , 'GELADO'],
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90   
    },
    {
        image: coffeHavaiano,
        type: ['ESPECIAL'],
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90   
    },
    {
        image: coffeArabe,
        type: ['ESPECIAL'],
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90   
    },
    {
        image: coffeIrlandes,
        type: ['ESPECIAL', '/' , 'ALCOÓLICO'],
        title: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90   
    },
]

export default coffeData