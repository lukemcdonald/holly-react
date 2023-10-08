import { Menu } from '@/components/menu'
import { SocialLinks } from '@/components/social-links'

function Footer() {
  return (
    <footer className="bg-primary-400 text-sm leading-5 tracking-normal text-white lg:bg-transparent lg:text-gray-400">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex flex-wrap lg:justify-between">
          <Menu className="mb-6 inline-flex w-full flex-none justify-center gap-4 lg:order-1 lg:mb-0 lg:flex lg:w-1/2 lg:justify-end" />
          <SocialLinks className="mb-6 inline-flex w-full flex-none justify-center lg:flex lg:justify-end" />
          <div className="mb-6 inline-flex w-full flex-none justify-center lg:w-1/2 lg:justify-start">
            &copy; Holly
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
