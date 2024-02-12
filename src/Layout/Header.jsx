import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-slate-800 shadow-xl" id="accueil">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

        <div className="flex lg:flex-1">
          <a href='#accueil' className="text-2xl font-protest text-white">Portfolio</a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
            <a 
              href="#aboutme" 
              className="block rounded-lg px-3 py-2 text-base font-protest text-white hover:bg-slate-700"
            >
                A propos
            </a>
            <a 
              href="#skills" 
              className="block rounded-lg px-3 py-2 text-base font-protest text-white hover:bg-slate-700"
            >
                Skills
            </a>
            <a 
              href="#projects" 
              className="block rounded-lg px-3 py-2 text-base font-protest text-white hover:bg-slate-700"
            >
                Projets
            </a>
            <a
              href="#contact" 
              className="block rounded-lg px-3 py-2 text-base font-protest text-white hover:bg-slate-700"
            >
                Contact
            </a>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#aboutme"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-protest text-white hover:bg-slate-700"
                  onClick={closeMobileMenu}
                >
                  A propos
                </a>
                <a
                  href="#skills"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-protest text-white hover:bg-slate-700"
                  onClick={closeMobileMenu}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-protest text-white hover:bg-slate-700"
                  onClick={closeMobileMenu}
                >
                  Projets
                </a>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-protest text-white hover:bg-slate-700"
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header;
