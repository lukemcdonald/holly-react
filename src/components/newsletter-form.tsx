import classnames from 'clsx'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

export function NewsletterForm({
  className,
  onSubmit,
  submitText = 'Submit',
}: {
  className?: string
  onSubmit: (email: string) => Promise<any>
  submitText?: string
}) {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = await onSubmit(email)
    console.log(result)
    setEmail('')
    setSuccess(true)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classnames('newsletter-form is-revealing md:flex', className)}
    >
      <div className="mr-2 flex-shrink flex-grow">
        <label className="hidden" htmlFor="email" aria-hidden="true">
          Email
        </label>
        <input
          required
          placeholder="Your best email&hellip;"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
          className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
        {success && (
          <div className="mt-2 text-xs italic text-gray-500">
            Email submitted successfully!
          </div>
        )}
      </div>

      <div className="control">
        <button
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
          type="submit"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}
