import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xwprvdpq");
  const formRef = useRef(null);
  const emailRef = useRef(null);

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const prevSubmitting = useRef(false);

const onSubmit = (e) => {
    setShowSuccess(false);
    setShowError(false);
    return handleSubmit(e);
  };
  useEffect(() => {
    if (prevSubmitting.current && !state.submitting) {
      if (state.succeeded) {
        formRef.current?.reset();
        setShowSuccess(true);
        setShowError(false);
        setTimeout(() => emailRef.current?.focus(), 80);
        const t = setTimeout(() => setShowSuccess(false), 3000);
        return () => clearTimeout(t);
      } else if (state.errors && state.errors.length > 0) {
        setShowError(true);
        setShowSuccess(false);
        const t = setTimeout(() => setShowError(false), 4000);
        return () => clearTimeout(t);
      } else {
        setShowSuccess(false);
        setShowError(false);
      }
    }
    prevSubmitting.current = state.submitting;
  }, [state.submitting, state.succeeded, state.errors]);

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          ref={emailRef}
          type="email"
          name="email"
          className="w-full px-3 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-[var(--color)] focus:ring-1 focus:ring-[var(--color)] outline-none transition-colors"
          placeholder="seu@email.com"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full px-3 py-2 bg-white/5 rounded-lg border border-white/10 focus:border-[var(--color)] focus:ring-1 focus:ring-[var(--color)] outline-none transition-colors resize-none"
          placeholder="Sua mensagem..."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>
      <div className="flex flex-col gap-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="cursor-pointer w-full py-2 px-4 bg-[var(--color)]/10 hover:bg-[var(--color)]/20 border border-[var(--color)] rounded-lg transition-colors duration-300 disabled:opacity-50"
        >
          {state.submitting ? 'Enviando...' : 'Enviar mensagem'}
        </button>
        <div aria-live="polite" className="min-h-[1.25rem] text-sm transition-opacity duration-200">
          <div className={`text-[var(--color)] font-medium ${showSuccess ? 'opacity-100' : 'opacity-0'}`}>
            Enviado! Obrigado pela mensagem.
          </div>

          <div className={`text-red-400 ${showError ? 'opacity-100' : 'opacity-0'}`}>
            Ocorreu um erro ao enviar. Verifique os campos e tente novamente.
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;