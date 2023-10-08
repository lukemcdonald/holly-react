import { SOCIAL_LINKS } from '@/components/social-links/constants'
import MenuItem from '@/components/social-links/social-link'
import clsx from 'clsx'

function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={clsx('list-reset', className)}>
      {SOCIAL_LINKS.map((link) => (
        <MenuItem key={link.name} link={link} />
      ))}
    </ul>
  )
}

export default SocialLinks
