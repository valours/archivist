/**
 * Tests et exemples pour les fonctions d'addition de tableau
 * Tests and examples for array addition functions
 */

import { additionSimple, additionPropriete, additionAvancee } from './arrayAddition.js';

/**
 * Tests pour additionSimple
 */
export function testAdditionSimple() {
  console.log('=== Tests additionSimple ===');
  
  // Test 1: Tableau de nombres simples
  const nombres = [1, 2, 3, 4, 5];
  console.log(`Addition de [1, 2, 3, 4, 5]: ${additionSimple(nombres)}`); // 15
  
  // Test 2: Tableau avec des valeurs mixtes
  const mixte = [1, 'hello', 3, null, 5, undefined, 7];
  console.log(`Addition de [1, 'hello', 3, null, 5, undefined, 7]: ${additionSimple(mixte)}`); // 16
  
  // Test 3: Tableau avec des décimaux
  const decimaux = [1.5, 2.3, 3.7];
  console.log(`Addition de [1.5, 2.3, 3.7]: ${additionSimple(decimaux)}`); // 7.5
  
  // Test 4: Tableau vide
  console.log(`Addition de tableau vide: ${additionSimple([])}`); // 0
  
  return {
    test1: additionSimple(nombres),
    test2: additionSimple(mixte),
    test3: additionSimple(decimaux),
    test4: additionSimple([])
  };
}

/**
 * Tests pour additionPropriete
 */
export function testAdditionPropriete() {
  console.log('=== Tests additionPropriete ===');
  
  // Test 1: Produits avec prix
  const produits = [
    { nom: 'Pomme', prix: 2.5 },
    { nom: 'Banane', prix: 1.8 },
    { nom: 'Orange', prix: 3.2 }
  ];
  const totalPrix = additionPropriete(produits, 'prix');
  console.log(`Total prix des produits: ${totalPrix}`); // 7.5
  
  // Test 2: Étudiants avec notes
  const etudiants = [
    { nom: 'Alice', note: 15 },
    { nom: 'Bob', note: 12 },
    { nom: 'Charlie', note: 18 },
    { nom: 'David', note: 14 }
  ];
  const totalNotes = additionPropriete(etudiants, 'note');
  console.log(`Total des notes: ${totalNotes}`); // 59
  
  return {
    totalPrix,
    totalNotes
  };
}

/**
 * Tests pour additionAvancee
 */
export function testAdditionAvancee() {
  console.log('=== Tests additionAvancee ===');
  
  // Test 1: Simple addition
  const nombres = [1, 2, 3, 4, 5];
  const sommeSimple = additionAvancee(nombres);
  console.log(`Addition avancée simple: ${sommeSimple}`); // 15
  
  // Test 2: Addition avec propriété
  const produits = [
    { nom: 'Pomme', prix: 2.5 },
    { nom: 'Banane', prix: 1.8 },
    { nom: 'Orange', prix: 3.2 }
  ];
  const totalPrix = additionAvancee(produits, { property: 'prix' });
  console.log(`Total prix avec additionAvancee: ${totalPrix}`); // 7.5
  
  // Test 3: Addition avec transformation
  const commandes = [
    { quantite: 2, prixUnitaire: 10 },
    { quantite: 3, prixUnitaire: 15 },
    { quantite: 1, prixUnitaire: 20 }
  ];
  const totalCommandes = additionAvancee(commandes, {
    transform: (item) => item.quantite * item.prixUnitaire
  });
  console.log(`Total commandes (quantité × prix): ${totalCommandes}`); // 85
  
  return {
    sommeSimple,
    totalPrix,
    totalCommandes
  };
}

/**
 * Fonction pour exécuter tous les tests
 */
export function runAllTests() {
  console.log('🧪 Exécution de tous les tests des fonctions d\'addition...\n');
  
  const results = {
    additionSimple: testAdditionSimple(),
    additionPropriete: testAdditionPropriete(),
    additionAvancee: testAdditionAvancee()
  };
  
  console.log('\n✅ Tous les tests terminés!');
  return results;
}

// Exemples d'utilisation pratique
export const exemplesPratiques = {
  // Calculer le total d'un panier
  calculerTotalPanier: (panier) => {
    return additionAvancee(panier, {
      transform: (item) => item.prix * item.quantite
    });
  },
  
  // Calculer la moyenne d'un ensemble de notes
  calculerMoyenne: (notes) => {
    const total = additionSimple(notes);
    return notes.length > 0 ? total / notes.length : 0;
  },
  
  // Calculer le total des ventes par mois
  calculerVentesMensuelles: (ventes) => {
    return additionPropriete(ventes, 'montant');
  }
};