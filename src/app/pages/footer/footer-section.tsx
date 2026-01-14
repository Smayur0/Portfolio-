import VisitorCounter from "./compo/visitors-count";

const Footer = () => {
  return (
    <div className="h-60">
      <div className="flex h-full flex-col justify-end space-y-2 pb-4">
        <div className="mb-10 w-full text-center">
          <VisitorCounter />
        </div>
        <>
          <p className="text-center text-sm text-gray-500">
            Design & Developed by{" "}
            <span className="cursor-pointer font-semibold">Mayur Shelke</span>
          </p>
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()}
            All rights reserved.
          </p>
        </>
      </div>
    </div>
  );
};

export default Footer;
