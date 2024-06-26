import React from "react";

function Footer() {
    return (
        <footer className="mt-auto bg-slate-800">
            <p className="flex items-center justify-center gap-x-2.5 p-3 text-center font-protest text-white pt-10">
                ©2024 coding with
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-600">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                by Marie-Charlotte LEVITRE. Tous droits réservés.
            </p>
            <p className="text-center font-protest text-white text-sm">Icons by <a href="https://icones8.fr/icons">Icones8.fr</a></p>
        </footer>
    )
}

export default Footer;
