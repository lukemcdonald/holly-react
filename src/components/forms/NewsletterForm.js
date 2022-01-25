import React from 'react'
import classnames from 'clsx'

export default function NewsletterForm({ className, onSubmit, submitBtn }) {
	const [email, setEmail] = React.useState('')

	function handleSubmit(event) {
		event.preventDefault()
		onSubmit(email)
	}

	function handleChange(event) {
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
			</div>

			<div className="control">
				<button
					className="-mt-px bg-secondary-400 text-white shadow-lg"
					type="submit"
				>
					{submitBtn || 'Submit'}
				</button>
			</div>
		</form>
	)
}
