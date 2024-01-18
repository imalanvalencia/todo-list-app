export default function Header({ page = 'HOME' }) {
 return (
     <header className="flex justify-between items-center w-full sticky top-0 py-4">
        <h1 className="text-xl text-center font-semibold">{page}</h1>
        <img src="https://xsgames.co/randomusers/avatar.php?g=pixel" className="size-10 rounded-full" />
    </header>
 )
}
