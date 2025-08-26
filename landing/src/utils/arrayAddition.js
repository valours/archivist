/**
 * Fonction pour faire des additions d'éléments d'un tableau
 * Function to perform additions of elements from an array
 */

/**
 * Additionne tous les éléments numériques d'un tableau
 * Adds all numeric elements of an array
 * 
 * @param {Array} array - Le tableau à additionner / The array to sum
 * @returns {number} La somme des éléments / The sum of elements
 */
export function additionSimple(array) {
  if (!Array.isArray(array)) {
    throw new Error('Le paramètre doit être un tableau / Parameter must be an array');
  }
  
  return array
    .filter(item => typeof item === 'number' && !isNaN(item))
    .reduce((sum, current) => sum + current, 0);
}

/**
 * Additionne une propriété spécifique des objets dans un tableau
 * Adds a specific property of objects in an array
 * 
 * @param {Array} array - Le tableau d'objets / The array of objects
 * @param {string} property - La propriété à additionner / The property to sum
 * @returns {number} La somme de la propriété / The sum of the property
 */
export function additionPropriete(array, property) {
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

/**
 * Fonction avancée d'addition avec options personnalisées
 * Advanced addition function with custom options
 * 
 * @param {Array} array - Le tableau à traiter / The array to process
 * @param {Object} options - Les options d'addition / Addition options
 * @param {string} [options.property] - Propriété à additionner (pour les objets) / Property to sum (for objects)
 * @param {Function} [options.transform] - Fonction de transformation avant addition / Transform function before addition
 * @param {boolean} [options.ignoreNaN] - Ignorer les valeurs NaN / Ignore NaN values (default: true)
 * @returns {number} La somme calculée / The calculated sum
 */
export function additionAvancee(array, options) {
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

/**
 * Exemples d'utilisation / Usage examples
 */

// Exemple 1: Addition simple de nombres
// const nombres = [1, 2, 3, 4, 5];
// console.log(additionSimple(nombres)); // 15

// Exemple 2: Addition d'une propriété d'objets
// const produits = [
//   { nom: 'Pomme', prix: 2.5 },
//   { nom: 'Banane', prix: 1.8 },
//   { nom: 'Orange', prix: 3.2 }
// ];
// console.log(additionPropriete(produits, 'prix')); // 7.5

// Exemple 3: Addition avancée avec transformation
// const commandes = [
//   { quantite: 2, prixUnitaire: 10 },
//   { quantite: 3, prixUnitaire: 15 },
//   { quantite: 1, prixUnitaire: 20 }
// ];
// const totalCommandes = additionAvancee(commandes, {
//   transform: (item) => item.quantite * item.prixUnitaire
// });
// console.log(totalCommandes); // 85

// Export named functions for convenience
const arrayAdditionUtils = {
  additionSimple,
  additionPropriete,
  additionAvancee
};

export default arrayAdditionUtils;