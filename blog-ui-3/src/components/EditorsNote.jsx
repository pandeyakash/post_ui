const EditorsNote = () => {
  return (
    <div
      className="
        mb-16
        p-8
        bg-gradient-to-br from-gray-50 to-white
        transition-all duration-500
        animate-fade-in
      "
    >
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
        Editor’s Note
      </p>

      <p className="text-lg leading-relaxed text-gray-800 max-w-3xl">
        This week, conversations across social platforms leaned toward
        authenticity — fewer polished narratives, more honest moments.
        As trends rise and fall quickly, what stood out was a collective
        shift toward meaning over noise.
      </p>

      <p className="mt-4 text-sm text-gray-500">
        — Editorial Team
      </p>
    </div>
  );
};

export default EditorsNote;
