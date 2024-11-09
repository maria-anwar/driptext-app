import React from "react";
import RegistrationForm from "../../components/client-forms/RegistrationForm";

const RegisterPage = () => {
  return (
    <div className="px-4 xs:px-5 sm:px-7 md:px-12 lg:px-9 xl:px-40 2xl:px-44 3xl:px-56 4xl:px-96 py-10 3xl:py-20">
      <div className="w-full flex d-flex flex-col gap-10">
        <div className="flex flex-col gap-4 px-4 xs:px-6 md:px-9">
          <h1 className="text-custom-black text-2xl md:text-3xl font-bold text-center md:px-8">
          Bestelle jetzt deinen kostenlosen Probetext im Wert von 105,00 €
          </h1>
          <p className="text-center text-custom-black text-lg px-2">
          Bitte schicke uns alle Informationen zu deinem Probetext. Wir werden uns gleich an die Arbeit machen einen hervorragenden Probetext für dich zu erstellen!
          </p>
          <h3 className="text-custom-black text-lg md:text-xl font-bold text-center md:px-8">
          Bitte beantworte uns folgende Fragen für das Briefing:
          </h3>
        </div>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
