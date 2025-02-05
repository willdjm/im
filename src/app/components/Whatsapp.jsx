import { MdWhatsapp } from "react-icons/md";

export function Whatsapp() {

return (

<div className="fixed right-28 bottom-8 group">
    <a href="https://wa.me/+5511997760614" target='_blank' rel="noreferrer"
        className="flex items-center justify-center text-white bg-green-600 rounded-full w-14 h-14 hover:bg-green-700 focus:ring-2 focus:outline-none">
        <MdWhatsapp size={35} />
    </a>
</div>
);
}