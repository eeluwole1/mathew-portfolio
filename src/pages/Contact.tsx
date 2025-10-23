export default function Contact() {
  return (
    <main className="min-h-[70vh] mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-gray-600 mt-2">
        I’m open to full-stack roles, freelance work, and collaborations.
      </p>

      <section className="mt-8 space-y-6">
        <form
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          action="/api/contact"
          method="POST"
        >
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can I help?"
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto rounded-xl border px-5 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Send Message
          </button>
        </form>

        <div className="text-sm text-gray-600">
          Prefer email? <a className="underline" href="mailto:elusiyan.m.eluwole@gmail.com">elusiyan.m.eluwole@gmail.com</a>
        </div>
      </section>
    </main>
  );
}
