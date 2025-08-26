'use client';

import { useEffect, useState } from "react";
import { additionSimple, additionPropriete, additionAvancee } from "../utils/arrayAddition.js";

export default function Home() {
  const [results, setResults] = useState<{
    additionSimple?: number;
    additionPropriete?: number; 
    additionAvancee?: number;
  }>({});
  
  useEffect(() => {
    // Exemples de données pour tester les fonctions
    const nombres = [1, 2, 3, 4, 5];
    const produits = [
      { nom: 'Pomme', prix: 2.5 },
      { nom: 'Banane', prix: 1.8 },
      { nom: 'Orange', prix: 3.2 }
    ];
    const commandes = [
      { quantite: 2, prixUnitaire: 10 },
      { quantite: 3, prixUnitaire: 15 },
      { quantite: 1, prixUnitaire: 20 }
    ];

    // Test des fonctions
    const testResults = {
      additionSimple: additionSimple(nombres),
      additionPropriete: additionPropriete(produits, 'prix'),
      additionAvancee: additionAvancee(commandes, {
        transform: (item: any) => item.quantite * item.prixUnitaire
      })
    };
    
    setResults(testResults);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Fonctions d&apos;Addition de Tableaux
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Démonstration des fonctions JavaScript pour additionner des éléments de tableaux
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Addition Simple */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Addition Simple
            </h2>
            <div className="text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Tableau: [1, 2, 3, 4, 5]
              </p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Résultat: {results.additionSimple || '...'}
              </p>
            </div>
            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              <code>additionSimple([1, 2, 3, 4, 5])</code>
            </div>
          </div>

          {/* Addition Propriété */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Addition Propriété
            </h2>
            <div className="text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Prix: Pomme 2.5€, Banane 1.8€, Orange 3.2€
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                Résultat: {results.additionPropriete || '...'}€
              </p>
            </div>
            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              <code>additionPropriete(produits, &apos;prix&apos;)</code>
            </div>
          </div>

          {/* Addition Avancée */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Addition Avancée
            </h2>
            <div className="text-left">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Commandes: 2×10€, 3×15€, 1×20€
              </p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                Résultat: {results.additionAvancee || '...'}€
              </p>
            </div>
            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              <code>additionAvancee(commandes, {`{transform}`})</code>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-12 bg-gray-100 dark:bg-gray-900 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Exemples de Code
          </h3>
          <div className="text-left space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded p-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">1. Addition Simple:</h4>
              <code className="text-sm text-gray-600 dark:text-gray-400">
                additionSimple([1, 2, 3, 4, 5]) // Résultat: 15
              </code>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded p-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Addition de Propriété:</h4>
              <code className="text-sm text-gray-600 dark:text-gray-400">
                {`additionPropriete(produits, 'prix') // Résultat: 7.5`}
              </code>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded p-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">3. Addition Avancée:</h4>
              <code className="text-sm text-gray-600 dark:text-gray-400">
                {`additionAvancee(commandes, { transform: (item) => item.quantite * item.prixUnitaire }) // Résultat: 85`}
              </code>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
              ✅ Fonctionnalités
            </h4>
            <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
              <li>• Addition de nombres simples</li>
              <li>• Addition de propriétés d&apos;objets</li>
              <li>• Transformations personnalisées</li>
              <li>• Gestion des valeurs non numériques</li>
              <li>• Validation des paramètres</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
              📋 Cas d&apos;Usage
            </h4>
            <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
              <li>• Calcul de totaux de paniers</li>
              <li>• Sommes de propriétés d&apos;objets</li>
              <li>• Calculs complexes avec transformations</li>
              <li>• Statistiques et métriques</li>
              <li>• Agrégation de données</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
