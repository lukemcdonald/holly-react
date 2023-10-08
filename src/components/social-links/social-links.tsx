import { SOCIAL_LINKS } from '@/components/social-links/constants'
import MenuItem from '@/components/social-links/social-link'
import { cn } from '@/utils/cn'

function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex gap-4', className)}>
      {SOCIAL_LINKS.map((link) => (
        <MenuItem key={link.name} link={link} />
      ))}
    </ul>
  )
}

export default SocialLinks
