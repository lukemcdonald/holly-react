import { Menu } from '@/components/menu'
import { SocialLinks } from '@/components/social-links'

function Footer() {
  return (
    <footer className="bg-primary-400 py-6 text-sm leading-5 tracking-normal text-white lg:bg-transparent lg:text-gray-400">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-between">
          <nav className="flex flex-col items-center gap-6 lg:order-1 lg:items-end">
            <SocialLinks className="flex gap-4" />
            <Menu className="flex gap-4" />
          </nav>
          <div className="">&copy; Holly</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
