// Farine: 1€/kg
// sucre: 1.5€ / 500gr
// oeufs: 3€ / 10 oeufs
// lait: 2.5€ / Litre
// chocolat: 10€ / 500 grammes
// décoration 3.5€ / unité
// fruits: 5€/kg

const prixFarine = 1;
const prixSucre = 1.5;
const prixOeuf = 3;
const prixLait = 2.5;
const prixChocolat = 10;
const prixDeco = 3.5;
const prixFruit = 5;

const prixForetNoire =
  prixFarine +
  prixSucre * 2 +
  prixOeuf * 2 +
  prixLait * 0.5 +
  prixChocolat * 2 +
  prixDeco * 5;

const prixTarteFraises =
  prixFruit * 2 +
  prixFarine * 0.5 +
  prixSucre +
  prixOeuf * 0.5 +
  prixLait * 0.5 +
  prixChocolat * 0.5 +
  prixDeco * 2;

const coeffMarge = prompt('Quelle marge souhaitez-vous appliquer ?');
console.log(
  'Prix coutant de la Forêt noire : ' +
    prixForetNoire +
    '€, Prix vendu : ' +
    prixForetNoire * coeffMarge +
    '€.'
);

// Vous avez 5 boutiques. Toutes les boutiques vendront 90% de ce qui a été produit. Vous produisez, 6 gâteaux de chaque type.
// Quelle est la trésorerie quotidienne à prévoir pour faire les gâteaux ?
const tresoQuotidienne = 5 * (6 * prixForetNoire + 6 * prixTarteFraises);
console.log('Trésorerie quotidienne : ' + tresoQuotidienne + '€');
// Quelle sera la recette quotidienne ?
const recetteQuotidienne = (tresoQuotidienne * coeffMarge * 90) / 100;
console.log('Recette quotidienne : ' + recetteQuotidienne + '€');
// Quel sera le bénéfice ?
const benefice = recetteQuotidienne - tresoQuotidienne;
console.log('Bénéfice : ' + benefice + '€');

// Si le bénéfice est pair, alors affichez le message: “Bim…”, si le bénéfice est impair, affichez “Bam…”.
const isPair = benefice % 2 === 0;
isPair && console.log('Bim...');
!isPair && console.log('Bam...');
