export function Map(current){
    if(current===1){
        return (
            <div className='flex justify-center'>
            <iframe
            
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.027516350922!2d30.97131412465651!3d30.007366274942292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145857790c1a2299%3A0x6ea7212c0a01379e!2z2YXZiNmEINmD2KfYstin2YYg2KjZhNin2LLYpyBrYXphbiBQbGF6YSBNYWxs!5e0!3m2!1sar!2seg!4v1742008042270!5m2!1sar!2seg"
            width="600"
            height="450"
            style={{ border: "0",filter: "invert(90%) hue-rotate(180deg)" }} // ✅ Style must be an object
            allowFullScreen // ✅ Corrected JSX property
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // ✅ Corrected JSX property
            className="rounded-md flex justify-center  shadow-md mt-10 md:w-full w-full "
          ></iframe>

          </div>
        )
    }
}
export const input_variable="px-2 py-2 font-raleway border-2 border-transparent border-b-dark_green outline-none transition-all duration-300 focus:border-dark_green focus:border-2 text-xs sm:text-sm md:text-md lg:text-md xl:text-md"
// export const input_variable=" px-2 py-2 font-raleway border-2 border-transparent border-b-dark_green outline-none transition-all duration-300 focus:border-dark_green focus:border-2"
export const currently_selected='bg-dark_green font-semibold flex-row flex items-center text-white transition-all duration-300 p-3 rounded-full gap-3'
export const not_selected="text-dark_green flex items-center gap-3 transition-all duration-300 font-semibold"

