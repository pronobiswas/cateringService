import React from 'react'

export default function Contactform() {
    return (
        <>
            <section id="contactForm">
                <div className='w-full h-full max-w-7xl mx-auto flex justify-center items-center pb-20'>
                    <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                            Contact Us
                        </h2>
                        <p className="text-gray-500 mb-8">
                            Fill out the form and we’ll get back to you shortly.
                        </p>

                        <form className="space-y-6">
                            {/* First & Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+880 1234 567890"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder="Write your message here..."
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white font-medium px-8 py-3 rounded-lg transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
