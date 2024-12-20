import { useContext, createContext, useState } from "react"

const SidebarContext = createContext()

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className={`bg-white transition-all float-left ${expanded ? 'w-52 ' : 'w-0'}`}>
            <nav className=" h-full flex flex-col bg-blue-50 border-r rounded-3xl mt-2 w-80 mr-96 shadow-xl text-white shadow-black">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img
                        src="https://www.bing.com/ck/a?!&&p=7c21e6928a7d8134bc921e23858341382bce8b566172f22205d971bb94fbd4c1JmltdHM9MTczMzk2MTYwMA&ptn=3&ver=2&hsh=4&fclid=13b0f84f-474c-6a16-02fd-eaa646be6b7c&u=a1L2ltYWdlcy9zZWFyY2g_cT1zYSUyMGxvZ28mRk9STT1JUUZSQkEmaWQ9RDVCREZCMEQ0NTJFRjA4RDgzMEZBRjNCQkMxREQ4QzRGNjJFMzMwMw&ntb=1"
                        className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"
                            }`}
                        alt=""
                    />
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>
            </nav >
        </aside >
    )
}

export function SidebarItem({ icon, text, active, alert }) {

    return (
        <li
            className={`
        relative flex items-center py-2 px-3 my-1
        mr-0
        font-medium rounded-lg cursor-pointer text-gray-600
        transition-colors group
        ${active
                    ? "bg-gradient-to-tr from-sky-950 to-slate-900 text-slate-300"
                    : "hover:bg-gradient-to-tr from-slate-600 to to-gray-800 hover:text-gray-200 "} group-hover:ml-28 transform duration-300 `}
        >
            {icon}
            <span
                className={`transition-all ml-3 `}
            >
                {text}
            </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-slate-400 `}
                />
            )}


            <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-slate-400 text-slate-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
            >
                {text}
            </div>

        </li>
    )
}