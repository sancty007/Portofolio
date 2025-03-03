import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Définition du schéma de validation
const emailSchema = z.object({
  name: z.string().min(1, "Veuillez entrer votre nom"),
  email: z.string().email("Veuillez entrer un email valide"),
  phone: z.string().optional(), // Le téléphone est optionnel
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

type EmailFormData = z.infer<typeof emailSchema>;

export default function ContactForm() {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "", message: "" },
  });

  const onSubmit = async (data: EmailFormData) => {
    try {
      console.log(JSON.stringify(data));

      // Simulation d'envoi réussi (décommenter pour l'envoi réel)
      /*
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setConfirmationMessage("Veuillez vérifier vos emails pour confirmer.");
        reset();
      } else {
        setConfirmationMessage("Erreur lors de l'envoi de l'email.");
      }
      */

      // Pour la démo:
      setConfirmationMessage("Veuillez vérifier vos emails pour confirmer.");
      reset();
    } catch (error) {
      setConfirmationMessage("Une erreur est survenue.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <div>
        {" "}
        <h1 className="text-white text-2xl font-bold text-center">
          On prend contact ?{" "}
        </h1>
        <h2 className="text-white">
          Je réponds géneralement dans les plus brefs délais
        </h2>
      </div>
      <div className="flex gap-6 ">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1 text-white"
          >
            Nom *
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 border text-white rounded-md bg-slate-950 ring ring-[#4a32e5] ring-offset-0 focus:ring-[#4a32e5]"
            {...register("name")}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium mb-1 text-white "
          >
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full px-3 py-2 text-white border rounded-md bg-slate-950  ring ring-[#4a32e5] ring-offset-0 focus:ring-[#4a32e5]"
            {...register("phone")}
          />
        </div>
      </div>
      <div className="form-item">
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1 text-white"
        >
          Email *
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border rounded-md bg-slate-950 text-white  ring ring-[#4a32e5] ring-offset-0 focus:ring-[#4a32e5]"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="form-item">
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1 text-white"
        >
          Message *
        </label>
        <textarea
          id="message"
          className="w-full px-3 py-2 border rounded-md bg-slate-950 text-white  ring ring-[#4a32e5] ring-offset-0 focus:ring-[#4a32e5]"
          rows={5}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="form-item">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 w-full text-white rounded disabled:opacity-50  border-2 border-[#4a32e5] bg-[#4a32e5] bg-opacity-50 border-opacity-20  hover:bg-[#3E2ABF]/20"
        >
          {isSubmitting ? "Envoyer en cours ..." : "Envoyer"}
        </button>
        {confirmationMessage && (
          <p className="text-sm text-green-500 mt-2">{confirmationMessage}</p>
        )}
      </div>
    </form>
  );
}
