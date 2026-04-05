//Página com contatos e envio de email
export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-600">
        If you have any questions, suggestions, or just want to say hello, feel
        free to reach out to us! You can contact us via email at
        <a
          href="mailto:info@wanderlust.com"
          className="text-blue-500 hover:underline"
        >
          info@wanderlust.com
        </a>
      </p>
    </div>
  );
}
