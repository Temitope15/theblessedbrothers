function Mission() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 text-center border-t-8 border-accent relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>

        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 relative z-10">
          Our Mission
        </h2>

        <div className="relative z-10">
          <svg className="w-10 h-10 text-accent/30 mx-auto transform -scale-x-100 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01699V16.8284C9.01699 18.2326 7.60107 19.1671 6.35715 18.6366L4.72145 17.9391C3.65983 17.4864 3.01699 16.3765 3.19796 15.2287C3.96696 10.352 7.74902 6.51657 12.639 5.25367C13.4357 5.04791 14.1627 5.75058 14.017 6.55997V6.55997C13.8863 7.28612 14.3649 7.97825 15.0867 8.12563C17.3888 8.59578 19.3488 9.94056 20.6792 11.8385C21.4326 12.9135 20.7353 14.4168 19.4316 14.5028L15.017 14.7938V20C15.017 20.5523 14.5693 21 14.017 21Z" />
          </svg>
          <p className="text-xl md:text-3xl text-gray-700 font-serif italic leading-relaxed max-w-2xl mx-auto">
            "To succeed in life with our families and to better the lots of mankind."
          </p>
          <svg className="w-10 h-10 text-accent/30 mx-auto mt-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01699V16.8284C9.01699 18.2326 7.60107 19.1671 6.35715 18.6366L4.72145 17.9391C3.65983 17.4864 3.01699 16.3765 3.19796 15.2287C3.96696 10.352 7.74902 6.51657 12.639 5.25367C13.4357 5.04791 14.1627 5.75058 14.017 6.55997V6.55997C13.8863 7.28612 14.3649 7.97825 15.0867 8.12563C17.3888 8.59578 19.3488 9.94056 20.6792 11.8385C21.4326 12.9135 20.7353 14.4168 19.4316 14.5028L15.017 14.7938V20C15.017 20.5523 14.5693 21 14.017 21Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Mission;