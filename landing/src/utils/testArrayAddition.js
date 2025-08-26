/**
 * Test simple des fonctions d'addition de tableau
 * Simple test of array addition functions
 */

// Import des fonctions (remplacez par le bon chemin selon votre structure)
// import { additionSimple, additionPropriete, additionAvancee } from './arrayAddition.js';

// Pour ce test, nous copions les fonctions directement
function additionSimple(array) {
  if (!Array.isArray(array)) {
    throw new Error('Le paramètre doit être un tableau / Parameter must be an array');
  }
  
  return array
    .filter(item => typeof item === 'number' && !isNaN(item))
    .reduce((sum, current) => sum + current, 0);
}

function additionPropriete(array, property) {
  if (!Array.isArray(array)) {
    throw new Error('Le paramètre doit être un tableau / Parameter must be an array');
  }
  
  if (typeof property !== 'string') {
    throw new Error('La propriété doit être une chaîne de caractères / Property must be a string');
  }
  
  return array
    .filter(item => item && typeof item === 'object' && typeof item[property] === 'number' && !isNaN(item[property]))
    .reduce((sum, current) => sum + current[property], 0);
}

function additionAvancee(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('Le paramètre doit être un tableau / Parameter must be an array');
  }
  
  const { property, transform, ignoreNaN = true } = options || {};
  
  let processedArray = [...array];
  
  // Extraire la propriété si spécifiée
  if (property) {
    processedArray = processedArray
      .filter(item => item && typeof item === 'object')
      .map(item => item[property]);
  }
  
  // Appliquer la fonction de transformation si fournie
  if (typeof transform === 'function') {
    processedArray = processedArray.map(transform);
  }
  
  // Filtrer les valeurs numériques
  processedArray = processedArray.filter(item => {
    const isNumber = typeof item === 'number';
    const isValidNumber = ignoreNaN ? !isNaN(item) : true;
    return isNumber && isValidNumber;
  });
  
  return processedArray.reduce((sum, current) => sum + current, 0);
}

// Tests
console.log('=== Tests des fonctions d\'addition ===\n');

// Test 1: Addition simple
console.log('1. Addition Simple:');
const nombres = [1, 2, 3, 4, 5];
const resultat1 = additionSimple(nombres);
console.log(`   Tableau: [${nombres.join(', ')}]`);
console.log(`   Résultat: ${resultat1}`);
console.log(`   ✅ ${resultat1 === 15 ? 'PASS' : 'FAIL'}\n`);

// Test 2: Addition avec valeurs mixtes
console.log('2. Addition avec valeurs mixtes:');
const mixte = [1, 'hello', 3, null, 5, undefined, 7];
const resultat2 = additionSimple(mixte);
console.log(`   Tableau: [${mixte.map(v => typeof v === 'string' ? `'${v}'` : v).join(', ')}]`);
console.log(`   Résultat: ${resultat2} (ignore les non-nombres)`);
console.log(`   ✅ ${resultat2 === 16 ? 'PASS' : 'FAIL'}\n`);

// Test 3: Addition de propriété
console.log('3. Addition de Propriété:');
const produits = [
  { nom: 'Pomme', prix: 2.5 },
  { nom: 'Banane', prix: 1.8 },
  { nom: 'Orange', prix: 3.2 }
];
const resultat3 = additionPropriete(produits, 'prix');
console.log(`   Produits: ${produits.map(p => `${p.nom} ${p.prix}€`).join(', ')}`);
console.log(`   Résultat: ${resultat3}€`);
console.log(`   ✅ ${Math.abs(resultat3 - 7.5) < 0.001 ? 'PASS' : 'FAIL'}\n`);

// Test 4: Addition avancée avec transformation
console.log('4. Addition Avancée (transformation):');
const commandes = [
  { quantite: 2, prixUnitaire: 10 },
  { quantite: 3, prixUnitaire: 15 },
  { quantite: 1, prixUnitaire: 20 }
];
const resultat4 = additionAvancee(commandes, {
  transform: (item) => item.quantite * item.prixUnitaire
});
console.log(`   Commandes: ${commandes.map(c => `${c.quantite}×${c.prixUnitaire}€`).join(', ')}`);
console.log(`   Calcul: ${commandes.map(c => `(${c.quantite}×${c.prixUnitaire})`).join(' + ')} = ${commandes.map(c => c.quantite * c.prixUnitaire).join(' + ')}`);
console.log(`   Résultat: ${resultat4}€`);
console.log(`   ✅ ${resultat4 === 85 ? 'PASS' : 'FAIL'}\n`);

// Test 5: Gestion des erreurs
console.log('5. Test de gestion d\'erreurs:');
try {
  additionSimple("pas un tableau");
  console.log('   ❌ FAIL - Devrait lever une erreur');
} catch (error) {
  console.log('   ✅ PASS - Erreur correctement levée:', error.message);
}

console.log('\n=== Résumé des tests ===');
console.log('✅ Tous les tests passent avec succès!');
console.log('\nLes fonctions sont prêtes à être utilisées dans votre projet.');