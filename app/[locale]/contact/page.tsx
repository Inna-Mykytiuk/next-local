import { ContactForm } from "@/components/ContactForm";

export default async function ContactPage() {
  return (
    <section className='w-full pt-10'>
      <div className='container'>
        <h1 className='text-2xl font-bold uppercase text-center'>Contact Form</h1>
        <ContactForm />
      </div>
    </section>
  );
}

