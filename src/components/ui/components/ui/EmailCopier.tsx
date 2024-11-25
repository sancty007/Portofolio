import { useState } from "react";

const EmailCopier = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div className="relative z-10 flex items-center gap-1">
      <span className="text-white">{email}</span>
      <button
        onClick={handleCopy}
        className="text-sm text-[#3E2ABF] hover:text-[#4f42a9]"
      >
        {copied ? "Copié 👌 " : "Copier"}
      </button>
    </div>
  );
};

export default EmailCopier;
