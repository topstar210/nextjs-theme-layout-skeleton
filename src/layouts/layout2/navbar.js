

export default function Navbar() {
    return (
        <div class="flex flex-col w-56 bg-th-background-secondary rounded-r-3xl overflow-hidden min-h-[500px]">
            <div class="flex items-center justify-center h-20 shadow-md">
                <h1 class="text-3xl uppercase">Logo</h1>
            </div>
            <ul class="flex flex-col py-4">
                <li>
                    <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="bx bx-home"></i></span>
                        <span class="text-sm font-medium">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg"><i class="bx bx-music"></i></span>
                        <span class="text-sm font-medium">Music</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}