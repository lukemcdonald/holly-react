import React from 'react'
import classnames from 'classnames'

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
			<div className="flex-grow flex-shrink mr-2">
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
					className="w-full px-4 py-3 text-sm text-gray-500 bg-white border border-gray-300 rounded-sm shadow-none"
				/>
			</div>

			<div className="control">
				<button
					className="-mt-px text-white shadow-lg bg-secondary-400"
					type="submit"
				>
					{submitBtn || 'Submit'}
				</button>
			</div>
		</form>
	)
}
