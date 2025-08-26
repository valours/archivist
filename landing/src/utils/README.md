# Fonctions d'Addition de Tableaux JavaScript

Ce module fournit des fonctions utilitaires pour additionner des éléments dans des tableaux JavaScript.

## Fonctions disponibles

### 1. `additionSimple(array)`

Additionne tous les éléments numériques d'un tableau.

**Paramètres:**
- `array` (Array): Le tableau à additionner

**Retourne:** 
- `number`: La somme des éléments numériques

**Exemple:**
```javascript
import { additionSimple } from './utils/arrayAddition.js';

const nombres = [1, 2, 3, 4, 5];
console.log(additionSimple(nombres)); // 15

const mixte = [1, 'hello', 3, null, 5];
console.log(additionSimple(mixte)); // 9 (ignore les non-nombres)
```

### 2. `additionPropriete(array, property)`

Additionne une propriété spécifique des objets dans un tableau.

**Paramètres:**
- `array` (Array): Le tableau d'objets
- `property` (string): Le nom de la propriété à additionner

**Retourne:** 
- `number`: La somme de la propriété

**Exemple:**
```javascript
import { additionPropriete } from './utils/arrayAddition.js';

const produits = [
  { nom: 'Pomme', prix: 2.5 },
  { nom: 'Banane', prix: 1.8 },
  { nom: 'Orange', prix: 3.2 }
];
console.log(additionPropriete(produits, 'prix')); // 7.5
```

### 3. `additionAvancee(array, options)`

Fonction avancée d'addition avec options personnalisées.

**Paramètres:**
- `array` (Array): Le tableau à traiter
- `options` (Object, optional): Les options d'addition
  - `property` (string, optional): Propriété à additionner (pour les objets)
  - `transform` (Function, optional): Fonction de transformation avant addition
  - `ignoreNaN` (boolean, optional): Ignorer les valeurs NaN (défaut: true)

**Retourne:** 
- `number`: La somme calculée

**Exemples:**
```javascript
import { additionAvancee } from './utils/arrayAddition.js';

// Addition simple
const nombres = [1, 2, 3, 4, 5];
console.log(additionAvancee(nombres)); // 15

// Addition avec propriété
const produits = [
  { nom: 'Pomme', prix: 2.5 },
  { nom: 'Banane', prix: 1.8 }
];
console.log(additionAvancee(produits, { property: 'prix' })); // 4.3

// Addition avec transformation
const commandes = [
  { quantite: 2, prixUnitaire: 10 },
  { quantite: 3, prixUnitaire: 15 }
];
const total = additionAvancee(commandes, {
  transform: (item) => item.quantite * item.prixUnitaire
});
console.log(total); // 65 (2*10 + 3*15)
```

## Gestion des erreurs

Toutes les fonctions vérifient que le premier paramètre est bien un tableau et lancent une erreur si ce n'est pas le cas :

```javascript
additionSimple("pas un tableau"); // Lance une erreur
```

## Gestion des valeurs non numériques

- Les fonctions ignorent automatiquement les valeurs non numériques
- Les valeurs `null`, `undefined`, et les chaînes de caractères sont filtrées
- Les valeurs `NaN` sont ignorées par défaut (configurable avec `ignoreNaN`)

## Installation et utilisation

1. Placez le fichier `arrayAddition.js` dans votre dossier `utils/`
2. Importez les fonctions dont vous avez besoin :

```javascript
// Import nommé (recommandé)
import { additionSimple, additionPropriete, additionAvancee } from './utils/arrayAddition.js';

// Import par défaut
import arrayAdditionUtils from './utils/arrayAddition.js';
const { additionSimple } = arrayAdditionUtils;
```

## Cas d'usage pratiques

### Calcul du total d'un panier d'achat
```javascript
const panier = [
  { produit: 'T-shirt', prix: 20, quantite: 2 },
  { produit: 'Jean', prix: 50, quantite: 1 },
  { produit: 'Chaussures', prix: 80, quantite: 1 }
];

const totalPanier = additionAvancee(panier, {
  transform: (item) => item.prix * item.quantite
});
console.log(`Total du panier: ${totalPanier}€`); // Total du panier: 170€
```

### Calcul de la moyenne d'un ensemble de notes
```javascript
const notes = [15, 12, 18, 14, 16];
const somme = additionSimple(notes);
const moyenne = somme / notes.length;
console.log(`Moyenne: ${moyenne}`); // Moyenne: 15
```

### Calcul du total des ventes mensuelles
```javascript
const ventesMensuelles = [
  { mois: 'Janvier', montant: 5000 },
  { mois: 'Février', montant: 4500 },
  { mois: 'Mars', montant: 5200 }
];

const totalVentes = additionPropriete(ventesMensuelles, 'montant');
console.log(`Total des ventes: ${totalVentes}€`); // Total des ventes: 14700€
```