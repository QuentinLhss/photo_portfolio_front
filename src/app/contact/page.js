import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

export default function ContactPage() {
    return (
        <div>
            <Header showName={true} subtitle={"Me contacter"}/>
            <ContactForm/>
        </div>

    );
}
