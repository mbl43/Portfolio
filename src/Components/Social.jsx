import { GitHubLight, Gmail, LinkedIn } from "developer-icons";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <LinkedIn size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mangesh-lemte",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <GitHubLight size={30} />
        </>
      ),
      href: "https://www.github.com/mbl43",
    },
    {
      id: 3,
      child: (
        <>
          Mail <Gmail size={28} />
        </>
      ),
      href: "mailto:mangeshlemte.a23@gmail.com",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href }) => (
          <li
            key={id}
            className="flex items-center rounded-3xl justify-between w-40 h-14 px-3 ml-[-109px] glass-pill hover:-ml-2 my-1 border-2 hover:border-gray-400
         hover:rounded-xl duration-300"
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
