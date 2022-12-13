import type { NextPage } from 'next';

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-6">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-500" />
        <div className="w-1/2 text-sm text-gray-300 border rounded-md">
          Hi how much are you selling them for?
        </div>
      </div>
      <div className="flex items-start flex-row-reverse space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-orange-500" />
        <div className="w-1/2 text-sm text-gray-700 border rounded-md">
          I want ￦20,000
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-500" />
        <div className="w-1/2 text-sm text-gray-300 border rounded-md">
          미쳤어
        </div>
      </div>
      <div className="fixed w-full mx-auto max-w-md bottom-0 left-0 right-0 inset-x-0">
        <div className="flex items-center relative">
          <input
            type="text"
            className=" shadow-sm rounded-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-12 "
          />
          <div className=" absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <span className="flex focust:ring-2 focus:ring-offset-3 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 text-sm text-white hover:bg-orange-600">
              &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
