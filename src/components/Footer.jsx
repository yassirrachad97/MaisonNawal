import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Maison Nawal</h2>
            <p className="mt-2">Votre salon de beauté de confiance</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>Email: contact@maisonnawal.com</p>
            <p>Téléphone: +212 600 000 000</p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Maison Nawal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;